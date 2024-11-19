import * as FileSystem from 'expo-file-system'
import { useCallback, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as S from './styles'
import { Pencil, User } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useFormContext } from 'react-hook-form'
import { SignUpFormData } from '@/screens/sign-up'
import { useFocusEffect } from '@react-navigation/native'

type ImageType = {
  name: string
  uri: string
  type: string
}

export function Avatar() {
  const { setValue, setError, clearErrors, watch } =
    useFormContext<SignUpFormData>()
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(
    undefined,
  )
  const theme = useTheme()

  const handleUserPhotoSelect = async () => {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
        allowsEditing: true,
      })

      if (photoSelected.canceled) {
        return
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri,
        )

        if (photoInfo.exists) {
          const IMAGE_SIZE_IN_MB = photoInfo.size / 1024 / 1024
          const IMAGE_SIZE_LIMIT = 5

          if (IMAGE_SIZE_IN_MB > IMAGE_SIZE_LIMIT) {
            return setError('avatar', {
              type: 'custom',
              message: 'Essa imagem é muito grande. Escolha uma de até 5MB.',
            })
          }

          clearErrors('avatar')

          const fileExtension = photoSelected.assets[0].uri.split('.').pop()
          const name = photoSelected.assets[0].uri.split('/').pop()

          if (name && fileExtension) {
            const photoFile: ImageType = {
              name,
              uri: photoSelected.assets[0].uri,
              type: `${photoSelected.assets[0].type}/${fileExtension}`,
            }

            setSelectedImage(photoFile)
            setValue('avatar', photoFile)
          }
        }
      }
    } catch (error) {}
  }

  const userAvatar = watch('avatar')

  useFocusEffect(
    useCallback(() => {
      if (userAvatar) {
        setSelectedImage(userAvatar)
      } else {
        setSelectedImage(undefined)
      }
    }, [userAvatar]),
  )

  return (
    <S.Container>
      {!selectedImage && (
        <S.Avatar>
          <User color={theme.colors['gray-4']} size={56} />
          <S.ButtonChangeAvatar onPress={handleUserPhotoSelect}>
            <Pencil size={16} color={theme.colors['gray-7']} />
          </S.ButtonChangeAvatar>
        </S.Avatar>
      )}

      {selectedImage && (
        <S.Avatar>
          <S.AvatarImage source={{ uri: selectedImage.uri }} />
          <S.ButtonChangeAvatar onPress={handleUserPhotoSelect}>
            <Pencil size={16} color={theme.colors['gray-7']} />
          </S.ButtonChangeAvatar>
        </S.Avatar>
      )}
    </S.Container>
  )
}
