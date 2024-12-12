import { AdvertisementDetailDTO } from '@/dtos/advertisement-details-dto'
import { formatToBRLCurrency } from '@/utils/format-product-price'
import * as S from './styles'

type DescriptionProps = {
  advertisement?: AdvertisementDetailDTO
}

export function Description({ advertisement }: DescriptionProps) {
  return (
    <S.Description>
      <S.TagContainer>
        <S.Tag>{advertisement?.is_new ? 'novo' : 'usado'}</S.Tag>
      </S.TagContainer>
      <S.RowContainer>
        <S.Title>{advertisement?.name}</S.Title>

        <S.Price>
          <S.Currency>r$ </S.Currency>
          {formatToBRLCurrency(advertisement?.price ?? 0)}
        </S.Price>
      </S.RowContainer>
      <S.DescriptionText>{advertisement?.description}</S.DescriptionText>
    </S.Description>
  )
}
