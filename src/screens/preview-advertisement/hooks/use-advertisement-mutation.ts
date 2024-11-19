import { AdvertisementFormData } from '@/contexts/advertisement-form'
import { useAuth } from '@/contexts/auth-context'
import { api } from '@/lib/axios'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'

import { useNavigation } from '@react-navigation/native'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

type ProductImage = {
  type: string
  name: string
  uri: string
}

export function useAdvertisementMutation() {
  const { user } = useAuth()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const queryClient = useQueryClient()

  const handleUploadProductImages = async (
    images: ProductImage[],
    productId: string,
  ) => {
    const imageData = new FormData()

    images.forEach((image) => imageData.append('images', image as any))

    imageData.append('product_id', productId)

    return api.post('/products/images', imageData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }

  const handleDeleteProductImages = async (productImagesToRemove: string[]) => {
    await api.delete('/products/images', {
      data: {
        productImagesIds: productImagesToRemove,
      },
    })
  }

  const handleCreateAdvertisement = async (data: AdvertisementFormData) => {
    const {
      name,
      description,
      isNew,
      price,
      acceptTrade,
      paymentMethods,
      productImages,
    } = data

    const paymentFormatted = paymentMethods.map((payment) => payment.key) // format [{key: 'pix', name: 'Pix'}] to ['pix', 'money', ...]

    const response = await api.post('/products', {
      name: name,
      description: description,
      is_new: isNew,
      price: price,
      accept_trade: acceptTrade,
      payment_methods: paymentFormatted,
      user_id: user.id,
      is_active: true,
    })

    const product = response.data

    const isExternalImage = (uri: string) => {
      return !uri.startsWith(`${api.defaults.baseURL}/images`)
    }

    const productImagesToUpload = productImages?.filter((item) =>
      isExternalImage(item.uri),
    )

    if (productImagesToUpload && productImagesToUpload.length > 0) {
      await handleUploadProductImages(productImagesToUpload, product.id)
    }
  }

  const handleEditAdvertisement = async (
    data: AdvertisementFormData & { id: string },
  ) => {
    const {
      id,
      name,
      acceptTrade,
      description,
      isNew,
      paymentMethods,
      price,
      productImages,
      productImagesToRemove,
    } = data

    const paymentFormatted = paymentMethods.map((payment) => payment.key)

    const response = await api.put(`/products/${id}`, {
      name,
      description,
      is_new: isNew,
      price,
      accept_trade: acceptTrade,
      payment_methods: paymentFormatted,
    })

    const isExternalImage = (uri: string) => {
      return !uri.startsWith(`${api.defaults.baseURL}/images`)
    }

    const productImagesToUpload = productImages?.filter((item) =>
      isExternalImage(item.uri),
    )

    if (productImagesToUpload && productImagesToUpload.length > 0) {
      return await handleUploadProductImages(productImagesToUpload, id)
    }

    if (productImagesToRemove && productImagesToRemove.length > 0) {
      return await handleDeleteProductImages(productImagesToRemove)
    }

    return response.data
  }

  const {
    mutateAsync: createAdvertisement,
    isPending: isLoadingCreateAdvertisement,
  } = useMutation({
    mutationFn: handleCreateAdvertisement,
    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ['my-advertisements', 'my-active-advertisements'],
      })
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Seu anúncio foi publicado com sucesso!',
        onHide: () => navigation.navigate('myAdvertisements'),
      })
    },
    onError(error) {
      console.log('Error creating ad', error)

      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
      })
    },
  })

  const {
    mutateAsync: editAdvertisement,
    isPending: isLoadingEditAdvertisement,
  } = useMutation({
    mutationFn: (data: AdvertisementFormData & { id: string }) =>
      handleEditAdvertisement(data),
    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ['my-advertisements', 'my-active-advertisements'],
      })
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Seu anúncio foi editado com sucesso!',
        onHide: () => navigation.navigate('myAdvertisements'),
      })
    },
    onError(error) {
      console.log('Error updating ad', error)
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
      })
    },
  })

  return {
    createAdvertisement,
    editAdvertisement,
    isLoadingCreateAdvertisement,
    isLoadingEditAdvertisement,
  }
}
