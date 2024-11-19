import { formatToBRLCurrency } from '@/utils/format-product-price'
import * as S from './styles'

type DescriptionProps = {
  advertisement?: {
    isNew?: boolean
    name: string
    price: number
    description: string
  }
}

export function Description({ advertisement }: DescriptionProps) {
  return (
    <S.Description>
      <S.TagContainer>
        <S.Tag>{advertisement?.isNew ? 'novo' : 'usado'}</S.Tag>
      </S.TagContainer>
      <S.RowContainer>
        <S.DescriptionTitle>{advertisement?.name}</S.DescriptionTitle>
        <S.Price>
          <S.Currency>r$ </S.Currency>
          {formatToBRLCurrency(advertisement?.price ?? 0)}
        </S.Price>
      </S.RowContainer>
      <S.DescriptionText>{advertisement?.description}</S.DescriptionText>
    </S.Description>
  )
}
