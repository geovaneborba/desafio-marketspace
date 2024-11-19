import * as S from './styles'

type TradeProps = {
  acceptTrade: boolean
}

export function Trade({ acceptTrade }: TradeProps) {
  return (
    <S.Trade>
      <S.TextBold>
        Aceita troca? <S.Text>{acceptTrade === true ? 'Sim' : 'Não'}</S.Text>
      </S.TextBold>
    </S.Trade>
  )
}
