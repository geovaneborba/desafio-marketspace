import * as S from './styles'
import { Checkbox } from '../checkbox'

export function PaymentsMethods() {
  return (
    <S.Container>
      <S.Label>Meios de pagamento aceitos</S.Label>

      <Checkbox />
    </S.Container>
  )
}
