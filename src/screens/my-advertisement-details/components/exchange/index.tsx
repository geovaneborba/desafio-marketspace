import { AdvertisementDetailDTO } from '@/dtos/advertisement-details-dto'
import * as S from './styles'

type ExchangeProps = {
  advertisement?: AdvertisementDetailDTO
}
export function Exchange({ advertisement }: ExchangeProps) {
  return (
    <S.Container>
      <S.TextBold>
        Aceita troca?{' '}
        <S.Text>{advertisement?.accept_trade ? 'Sim' : 'Não'}</S.Text>
      </S.TextBold>
    </S.Container>
  )
}
