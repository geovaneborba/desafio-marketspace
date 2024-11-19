import * as S from './styles'

type ExchangeProps = {
  acceptTrade?: boolean
}

export function Exchange({ acceptTrade }: ExchangeProps) {
  return (
    <S.Container>
      <S.TextBold>
        Aceita troca? <S.Text>{acceptTrade ? 'Sim' : 'Não'}</S.Text>
      </S.TextBold>
    </S.Container>
  )
}
