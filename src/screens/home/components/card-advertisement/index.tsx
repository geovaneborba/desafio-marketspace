import { formatToBRLCurrency } from '@/utils/format-product-price'
import * as S from './styles'
import { api } from '@/lib/axios'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { AdvertisementListDTO } from '@/dtos/advertisement-list-dto'

type CardAdProps = {
  advertisement: AdvertisementListDTO
  navigation: AppRoutesNavigatorProps
}

export function CardAdvertisement({ advertisement, navigation }: CardAdProps) {
  const { id, user, product_images, is_new, name, price } = advertisement

  const userAvatar = `${api.defaults.baseURL}/images/${user.avatar}`
  const productImage = `${api.defaults.baseURL}/images/${product_images[0].path}`

  return (
    <S.ProductItemPressable
      onPress={() => navigation.navigate('advertisementDetails', { id })}
    >
      <S.ContainerRelative>
        <S.ProfileImage source={{ uri: userAvatar }} />

        <S.ProductCondition isNew={is_new}>
          <S.ProductConditionText>
            {is_new ? 'Novo' : 'Usado'}
          </S.ProductConditionText>
        </S.ProductCondition>

        <S.ProductImage
          source={{
            uri: productImage,
          }}
        />
      </S.ContainerRelative>

      <S.ProductName>{name}</S.ProductName>
      <S.ProductPrice>
        <S.ProductCurrency>r$ </S.ProductCurrency>
        {formatToBRLCurrency(price)}
      </S.ProductPrice>
    </S.ProductItemPressable>
  )
}