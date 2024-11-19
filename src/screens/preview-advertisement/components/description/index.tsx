import { formatToBRLCurrency } from '@/utils/format-product-price'
import * as S from './styles'
type DescriptionProps = {
  isNew: boolean
  title: string
  price: number
  description: string
}
export function Description({
  isNew,
  title,
  price,
  description,
}: DescriptionProps) {
  return (
    <S.Description>
      <S.TagContainer>
        <S.Tag>{isNew === true ? 'novo' : 'usado'}</S.Tag>
      </S.TagContainer>
      <S.Header>
        <S.DescriptionTitle>{title}</S.DescriptionTitle>
        <S.Price>
          <S.Currency>r$ </S.Currency>
          {formatToBRLCurrency(price)}
        </S.Price>
      </S.Header>
      <S.DescriptionText>{description}</S.DescriptionText>
    </S.Description>
  )
}
