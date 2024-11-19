import { Button } from '@/components/button/button'

import * as S from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  AdvertisementFormData,
  useAdvertisementForm,
} from '@/contexts/advertisement-form'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { useNavigation } from '@react-navigation/native'

type FooterProps = {
  mode: 'create' | 'edit'
  id?: string
}

export function Footer({ mode, id }: FooterProps) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<AppRoutesNavigatorProps>()

  const {
    methods: { handleSubmit, reset },
  } = useAdvertisementForm()

  const handlePreview = (data: AdvertisementFormData) => {
    navigation.navigate('previewAdvertisement', {
      id,
      productImagesToRemove: data.productImagesToRemove,
      productImages: data.productImages,
      name: data.name,
      description: data.description,
      isNew: data.isNew,
      price: data.price,
      acceptTrade: data.acceptTrade,
      paymentMethods: data.paymentMethods,
      action: mode,
    })
  }

  const handleCancel = () => {
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

    navigation.navigate('home')
  }

  return (
    <S.Footer>
      <S.Container style={{ paddingBottom: insets.bottom }}>
        <Button
          variant="gray-5"
          style={{ flex: 1, height: 42 }}
          onPress={handleCancel}
        >
          <Button.Text variant="gray-2">Cancelar</Button.Text>
        </Button>

        <Button
          variant="gray-1"
          style={{ flex: 1, height: 42 }}
          onPress={handleSubmit(handlePreview)}
        >
          <Button.Text variant="gray-7">Avançar</Button.Text>
        </Button>
      </S.Container>
    </S.Footer>
  )
}
