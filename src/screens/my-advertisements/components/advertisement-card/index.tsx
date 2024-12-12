import * as S from './styles'

import { AppRoutesNavigatorProps } from '@/routes/app.routes'

import { api } from '@/lib/axios'
import { formatToBRLCurrency } from '@/utils/format-product-price'
import { UserAdvertisementListDTO } from '@/dtos/user-advertisement-list-dto'
import { NoProductImage } from '../no-product-image'

type AdCardProps = {
  navigation: AppRoutesNavigatorProps
  advertisement: UserAdvertisementListDTO
}

export function AdvertisementCard({ advertisement, navigation }: AdCardProps) {
  const productImage =
    advertisement.product_images.length > 0 &&
    `${api.defaults.baseURL}/images/${advertisement.product_images[0].path}`

  return (
    <S.CardPressable
      onPress={() =>
        navigation.navigate('myAdvertisementDetails', {
          id: advertisement.id,
        })
      }
    >
      <S.ImageContainer>
        <S.Condition isNew={advertisement.is_new}>
          <S.ConditionText>
            {advertisement.is_new ? 'Novo' : 'Usado'}
          </S.ConditionText>
        </S.Condition>

        {productImage ? (
          <S.ImageAd
            source={{
              uri: productImage,
            }}
          />
        ) : (
          <NoProductImage />
        )}

        {!advertisement.is_active && <S.Overlay />}
        {!advertisement.is_active && (
          <S.StatusText>anúncio desativado</S.StatusText>
        )}
      </S.ImageContainer>

      <S.TitleContainer>
        <S.Title>{advertisement.name}</S.Title>
      </S.TitleContainer>

      <S.Price>
        <S.Currency>r$</S.Currency> {formatToBRLCurrency(advertisement.price)}
      </S.Price>
    </S.CardPressable>
  )
}
