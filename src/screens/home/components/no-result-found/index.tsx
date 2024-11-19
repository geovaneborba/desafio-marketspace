import Logo from '@/assets/images/search-logo.svg'

import * as S from './styles'

export function NoResultFound() {
  return (
    <S.Container>
      <Logo width={200} height={200} />
      <S.Title>Nåo encontrei nenhum produto a venda no momento</S.Title>
    </S.Container>
  )
}
