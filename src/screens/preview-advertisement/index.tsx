import { useNavigation, useRoute } from '@react-navigation/native'
import { Tag } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'

import { Button } from '@/components/button/button'
import { Carousel } from '@/screens/preview-advertisement/components/carousel'
import { Description } from '@/screens/preview-advertisement/components/description'
import { Header } from '@/screens/preview-advertisement/components/header'
import { Payments } from '@/screens/preview-advertisement/components/payments'
import { Trade } from '@/screens/preview-advertisement/components/trade'
import { UserInfo } from '@/screens/preview-advertisement/components/user-info'

import * as S from '@/screens/preview-advertisement/styles'

import { useAuth } from '@/contexts/auth-context'
import { useAdvertisementForm } from '@/contexts/advertisement-form'
import { useAdvertisementMutation } from './hooks/use-advertisement-mutation'

import { AppRoutesNavigatorProps, RouteProps } from '@/routes/app.routes'

import { api } from '@/lib/axios'
import { Loading } from '@/components/loading'

export default function PreviewAdvertisement() {
  const { user } = useAuth()
  const {
    params: {
      id,
      paymentMethods,
      name,
      description,
      isNew,
      price,
      acceptTrade,
      productImagesToRemove,
      productImages,
      action,
    },
  } = useRoute<RouteProps['PreviewAdvertisement']>()

  const productId = String(id)

  const insets = useSafeAreaInsets()
  const theme = useTheme()

  const navigation = useNavigation<AppRoutesNavigatorProps>()

  const {
    createAdvertisement,
    editAdvertisement,
    isLoadingCreateAdvertisement,
    isLoadingEditAdvertisement,
  } = useAdvertisementMutation()

  const {
    methods: { reset },
  } = useAdvertisementForm()

  const handleGoBack = () => {
    return action === 'create'
      ? navigation.navigate('advertisementForm', {
          mode: 'create',
          keepPreviousData: true,
        })
      : navigation.navigate('advertisementForm', {
          mode: 'edit',
          id: productId,
        })
  }

  const handlePublish = async () => {
    const ensureProductImageProperties = productImages?.map((image) => ({
      ...image,
      id: image.id,
    }))

    const newAdvertisement = {
      name,
      description,
      isNew,
      price,
      acceptTrade,
      paymentMethods,
      productImages: ensureProductImageProperties,
      productImagesToRemove: [],
    }

    const updatedAdvertisement = {
      id: productId,
      name,
      description,
      isNew,
      price,
      acceptTrade,
      paymentMethods,
      productImagesToRemove: productImagesToRemove ?? [],
      productImages: ensureProductImageProperties,
    }

    if (action === 'create') {
      await createAdvertisement(newAdvertisement)
      reset()
    } else {
      await editAdvertisement(updatedAdvertisement)
    }
  }

  return (
    <S.Container>
      <S.ScrollView>
        <Header
          title="Pré visualização do anúncio"
          subtitle="É assim que seu produto vai aparecer!"
        />

        <Carousel images={productImages} />

        <UserInfo
          name={user.name}
          avatarUrl={`${api.defaults.baseURL}/images/${user.avatar}`}
        />

        <Description
          isNew={isNew}
          title={name}
          price={price}
          description={description}
        />

        <Trade acceptTrade={acceptTrade} />

        <Payments paymentMethods={paymentMethods} />

        <S.Footer>
          <S.ButtonsContainer style={{ paddingBottom: insets.bottom }}>
            <Button
              variant="gray-5"
              style={{ flex: 1, height: 42 }}
              onPress={handleGoBack}
            >
              <Button.Text variant="gray-2">Voltar e editar</Button.Text>
            </Button>

            <Button
              onPress={handlePublish}
              variant="blue-light"
              style={{
                flex: 1,
                opacity:
                  isLoadingCreateAdvertisement || isLoadingEditAdvertisement
                    ? 0.5
                    : 1,
              }}
              disabled={
                isLoadingCreateAdvertisement || isLoadingEditAdvertisement
              }
            >
              {isLoadingCreateAdvertisement || isLoadingEditAdvertisement ? (
                <Loading />
              ) : (
                <>
                  <Button.Icon
                    icon={Tag}
                    size={16}
                    color={theme.colors['gray-7']}
                  />
                  <Button.Text variant="gray-7">Publicar</Button.Text>
                </>
              )}
            </Button>
          </S.ButtonsContainer>
        </S.Footer>
      </S.ScrollView>
    </S.Container>
  )
}
