// React and React Native
import { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AppRoutesNavigatorProps, RouteProps } from '@/routes/app.routes'
import { Power, Trash } from 'phosphor-react-native'
import { useMutation, useQuery } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

import { api } from '@/lib/axios'

import { AdvertisementDetailDTO } from '@/dtos/advertisement-details-dto'

import { Button } from '@/components/button/button'
import { Carousel } from '@/screens/my-advertisement-details/components/carousel'
import { Header } from '@/screens/my-advertisement-details/components/header'
import { Payments } from '@/screens/my-advertisement-details/components/payments'
import { DialogAdvertisementStatus } from './components/dialog-advertisement-status'
import { DialogRemoveAdvertisement } from './components/dialog-remove-advertisement'
import { User } from './components/user'
import { Description } from './components/description'
import { Exchange } from './components/exchange'

import * as S from '@/screens/my-advertisement-details/styles'
import { AdvertisementSkeleton } from './components/advertisement-skeleton'

export default function MyAdvertisementDetails() {
  const {
    params: { id },
  } = useRoute<RouteProps['MyAdvertisementDetails']>()
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const {
    data: advertisement,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await api.get<AdvertisementDetailDTO>(`/products/${id}`)

      return response.data
    },
  })

  const mutationRemoveAd = useMutation({
    mutationKey: ['remove-my-ad', id],
    mutationFn: async () => {
      await api.delete(`/products/${id}`)
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Seu anúncio foi excluído com sucesso!',
        onHide: () => navigation.navigate('myAdvertisements'),
        visibilityTime: 500,
      })
    },
    onError: (error) => {
      console.log(error.message)
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
      })
    },
  })

  const mutationDisableOrEnableAd = useMutation({
    mutationFn: async (status: boolean) => {
      await api.patch(`/products/${id}`, { is_active: status })
    },
    onSuccess: (_, status) => {
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: `Seu anúncio foi ${status ? 'reativado' : 'desativado'} com sucesso!`,
        visibilityTime: 3000,
        onHide: () => refetch(),
      })
    },
    onError: (error) => {
      console.log(error.message)
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
      })
    },
  })

  const handleEditAdvertisementStatus = (status: boolean) => {
    if (advertisement?.is_active) {
      mutationDisableOrEnableAd.mutateAsync(status)
    } else {
      mutationDisableOrEnableAd.mutateAsync(status)
    }
  }

  const handleToggleAdvertisementStatusDialog = () => {
    setIsStatusDialogOpen((state) => !state)
  }

  const handleToggleDeleteAdvertisementDialog = () => {
    setIsDeleteDialogOpen((state) => !state)
  }

  const handleRemoveAd = async () => {
    await mutationRemoveAd.mutateAsync()
  }

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

  if (isLoading) {
    return <AdvertisementSkeleton />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Header productId={String(id)} />

        <Carousel
          isActive={advertisement?.is_active}
          images={advertisement?.product_images}
        />

        <User advertisement={advertisement} />
        <Description advertisement={advertisement} />
        <Exchange advertisement={advertisement} />
        <Payments paymentMethods={advertisement?.payment_methods} />

        <S.Footer>
          {!advertisement?.is_active ? (
            <Button
              variant="blue-light"
              style={{ width: '100%' }}
              onPress={handleToggleAdvertisementStatusDialog}
            >
              <Power size={16} color={theme.colors['gray-7']} />
              <Button.Text variant="gray-7">Reativar anúncio</Button.Text>
            </Button>
          ) : (
            <Button
              variant="gray-1"
              style={{ width: '100%' }}
              onPress={handleToggleAdvertisementStatusDialog}
            >
              <Power size={16} color={theme.colors['gray-7']} />
              <Button.Text variant="gray-7">Desativar anúncio</Button.Text>
            </Button>
          )}

          <Button
            variant="gray-5"
            style={{ width: '100%' }}
            onPress={handleToggleDeleteAdvertisementDialog}
          >
            <Trash size={16} color={theme.colors['gray-2']} />
            <Button.Text variant="gray-2">Excluir anúncio</Button.Text>
          </Button>
        </S.Footer>

        <DialogAdvertisementStatus
          isOpen={isStatusDialogOpen}
          productIsActive={advertisement?.is_active ? true : false}
          onClose={handleToggleAdvertisementStatusDialog}
          onEditStatus={handleEditAdvertisementStatus}
        />

        <DialogRemoveAdvertisement
          isOpen={isDeleteDialogOpen}
          onClose={handleToggleDeleteAdvertisementDialog}
          onRemove={handleRemoveAd}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
