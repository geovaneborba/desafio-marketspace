import * as ImagePickerExpo from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { useTheme } from 'styled-components/native'

import { Plus, X } from 'phosphor-react-native'
import * as S from './styles'
import { InputErrorMessage } from '@/components/input-error-message'
import { useAdvertisementForm } from '@/contexts/advertisement-form'
import Toast from 'react-native-toast-message'
import { useAuth } from '@/contexts/auth-context'
import { useCallback, useState } from 'react'
import { api } from '@/lib/axios'
import { useFocusEffect } from '@react-navigation/native'
import { formatPhotoFilename } from '@/utils/format-photo-filename'

type ProductImage = {
  id?: string
  name: string
  type: string
  uri: string
}

export function ImagePicker() {
  const theme = useTheme()
  const { user } = useAuth()
  const {
    methods: {
      setValue,
      setError,
      formState: { errors },
      watch,
    },
  } = useAdvertisementForm()

  const [selectedImages, setSelectedImages] = useState<ProductImage[]>([])
  const [selectedImageIdsToRemove, setSelectedImageIdsToRemove] = useState<
    string[]
  >([])

  const handleSelectImage = async () => {
    try {
      const photoSelected = await ImagePickerExpo.launchImageLibraryAsync({
        mediaTypes: ImagePickerExpo.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
        allowsEditing: true,
      })

      if (photoSelected.canceled) return

      if (selectedImages && selectedImages.length > 2) {
        setError('productImages', {
          message: 'Você só pode selecionar no máximo 3 imagens!',
          type: 'custom',
        })
        return Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Você só pode selecionar no máximo 3 imagens!',
          visibilityTime: 2000,
        })
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri,
        )

        if (photoInfo.exists) {
          const PHOTO_SIZE_IN_MB = photoInfo.size / 1024 / 1024

          if (PHOTO_SIZE_IN_MB > 5) {
            return Toast.show({
              type: 'error',
              text1: 'Erro',
              text2: 'Essa imagem é muito grande. Escolha uma de até 5MB.',
              visibilityTime: 2000,
            })
          }

          const fileExtension = photoSelected.assets[0].uri.split('.').pop()

          if (fileExtension) {
            const photoName = formatPhotoFilename(user.name, fileExtension)
            const type = `${photoSelected.assets[0].type}/${fileExtension}`

            const photoFile = {
              name: photoName,
              uri: photoSelected.assets[0].uri,
              type,
            } as any

            const updatedImages = [...selectedImages, photoFile]

            setSelectedImages(updatedImages)
            setValue('productImages', updatedImages)
          }
        }
      }
    } catch (error) {
      console.log(error)
      return Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Não foi possível selecionar a imagem. Tente novamente!',
        visibilityTime: 2000,
      })
    }
  }

  const handleRemoveImage = (imageToRemove: ProductImage) => {
    try {
      const isImageStoredOnAPI = imageToRemove.uri.startsWith(
        `${api.defaults.baseURL}/images/`,
      )
      const updatedImages = selectedImages.filter(
        (item) => item.uri !== imageToRemove.uri,
      )

      setSelectedImages(updatedImages)
      setValue('productImages', updatedImages)

      if (isImageStoredOnAPI && imageToRemove.id) {
        const newIdsToRemove = [...selectedImageIdsToRemove, imageToRemove.id]

        setSelectedImageIdsToRemove(newIdsToRemove)
        setValue('productImagesToRemove', newIdsToRemove)
      }
    } catch (error) {
      console.log(error)
      return Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Não foi possível remover a imagem. Tente novamente!',
        visibilityTime: 2000,
      })
    }
  }
  const productImages = watch('productImages')

  useFocusEffect(
    useCallback(() => {
      setSelectedImageIdsToRemove([])
    }, []),
  )

  useFocusEffect(
    useCallback(() => {
      if (productImages && productImages.length > 0) {
        setSelectedImages(productImages)
      } else {
        setSelectedImages([])
      }
    }, [productImages]),
  )

  return (
    <>
      <S.ImagePickerContainer>
        <>
          {selectedImages &&
            selectedImages.map((image) => (
              <S.ImageContainer key={image.uri}>
                <S.Image
                  source={{
                    uri: image.uri,
                  }}
                />
                <S.ButtonRemoveImage onPress={() => handleRemoveImage(image)}>
                  <X size={12} color={theme.colors['gray-7']} />
                </S.ButtonRemoveImage>
              </S.ImageContainer>
            ))}

          {selectedImages && selectedImages.length < 3 && (
            <S.ButtonAddImage onPress={handleSelectImage}>
              <Plus size={24} color={theme.colors['gray-4']} />
            </S.ButtonAddImage>
          )}
        </>
      </S.ImagePickerContainer>

      {!!errors.productImages && (
        <InputErrorMessage
          errorMessage={errors.productImages.message}
          style={{
            marginBottom: 16,
          }}
        />
      )}
    </>
  )
}
