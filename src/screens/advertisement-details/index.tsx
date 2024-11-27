import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RouteProps, AppRoutesNavigatorProps } from '@/routes/app.routes'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'phosphor-react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { api } from '@/lib/axios'

import { formatToBRLCurrency } from '@/utils/format-product-price'

import { AdvertisementDetailDTO } from '@/dtos/advertisement-details-dto'

import { Button } from '@/components/button/button'
import { Carousel } from './components/carousel'
import { Payments } from './components/payments'
import { Exchange } from './components/exchange'
import { Description } from './components/description'
import { User } from './components/user'
import { DialogContact } from './components/dialog-contact'
import { AdvertisementSkeleton } from './components/advertisement-skeleton'

import * as S from './styles'
import { NoProductImage } from './components/no-product-image'

export default function AdvertisementDetails() {
  const {
    params: { id },
  } = useRoute<RouteProps['AdvertisementDetails']>()
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const insets = useSafeAreaInsets()
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  const { data: advertisement, isLoading } = useQuery({
    queryKey: ['advertisement', id],
    queryFn: async () => {
      const response = await api.get<AdvertisementDetailDTO>(`/products/${id}`)
      return response.data
    },
  })

  const handleContactDialog = () => {
    setIsContactDialogOpen((state) => !state)
  }

  if (isLoading) {
    return <AdvertisementSkeleton />
  }

  return (
    <S.Container>
      <S.ScrollView style={{ flexGrow: 1 }}>
        <S.BackButton
          style={{ paddingTop: insets.top }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color={theme.colors['gray-1']} />
        </S.BackButton>

        {advertisement?.product_images.length === 0 ? (
          <NoProductImage />
        ) : (
          <Carousel
            images={advertisement?.product_images}
            isActive={advertisement?.is_active}
          />
        )}

        <Carousel
          images={advertisement?.product_images}
          isActive={advertisement?.is_active}
        />

        <User user={advertisement?.user} />

        <Description advertisement={advertisement} />

        <Exchange acceptTrade={advertisement?.accept_trade} />

        <Payments paymentMethods={advertisement?.payment_methods} />
      </S.ScrollView>

      <S.Footer>
        <S.FooterPrice>
          <S.FooterCurrency>r$ </S.FooterCurrency>
          {formatToBRLCurrency(advertisement?.price ?? 0)}
        </S.FooterPrice>
        <Button variant="blue-light" onPress={handleContactDialog}>
          <FontAwesome
            name="whatsapp"
            size={16}
            color={theme.colors['gray-7']}
          />
          <Button.Text variant="gray-7">Entrar em contato</Button.Text>
        </Button>

        <DialogContact
          advertisement={{
            name: advertisement?.name,
            price: advertisement?.price,
            user: {
              tel: advertisement?.user.tel,
            },
          }}
          isOpen={isContactDialogOpen}
          onClose={handleContactDialog}
        />
      </S.Footer>
    </S.Container>
  )
}
