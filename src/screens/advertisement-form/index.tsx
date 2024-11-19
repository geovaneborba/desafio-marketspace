import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { RouteProps } from '@/routes/app.routes'

import { api } from '@/lib/axios'

import { useAdvertisementForm } from '@/contexts/advertisement-form'

import { AdvertisementDetailDTO } from '@/dtos/advertisement-details-dto'

import { ProductTrade } from './components/accept-trade'
import { Header } from './components/header'
import { ProductImage } from './components/product-image'
import { ProductDescription } from './components/product-description'
import { ProductCondition } from './components/product-condition'
import { ProductPrice } from './components/product-price'
import { PaymentsMethods } from './components/payments'
import { Footer } from './components/footer'

import * as S from './styles'

export default function AdvertisementForm() {
  const {
    params: { id, mode, keepPreviousData },
  } = useRoute<RouteProps['AdvertisementForm']>()

  const {
    methods: { reset },
  } = useAdvertisementForm()

  const {
    data: advertisement,
    refetch,
    isSuccess,
  } = useQuery({
    queryKey: ['advertisement', id],
    queryFn: async () => {
      const response = await api.get<AdvertisementDetailDTO>(`/products/${id}`)
      return response.data
    },
    enabled: !!id && mode === 'edit',
  })

  useFocusEffect(
    useCallback(() => {
      if (mode === 'create' && !keepPreviousData) {
        reset({
          name: '',
          description: '',
          isNew: false,
          price: 0,
          acceptTrade: false,
          paymentMethods: [],
          productImages: [],
          productImagesToRemove: [],
        })
      }

      if (mode === 'edit') {
        refetch()

        if (isSuccess) {
          reset({
            name: advertisement.name,
            description: advertisement.description,
            isNew: advertisement.is_new,
            price: advertisement.price,
            acceptTrade: advertisement.accept_trade,
            paymentMethods: advertisement.payment_methods,
            productImagesToRemove: [],
            productImages: advertisement?.product_images.map((image) => ({
              id: image.id,
              name: image.path,
              type: `image/${image.path.split('.')[1]}`,
              uri: `${api.defaults.baseURL}/images/${image.path}`,
            })),
          })
        }
      }
    }, [advertisement, isSuccess, refetch, reset, mode, keepPreviousData]),
  )

  return (
    <S.Container>
      <S.ScrollView>
        <Header mode={mode} />

        <S.Form>
          <ProductImage />
          <ProductDescription />
          <ProductCondition />
          <ProductPrice />
          <ProductTrade />
          <PaymentsMethods />
        </S.Form>

        <Footer mode={mode} id={id} />
      </S.ScrollView>
    </S.Container>
  )
}
