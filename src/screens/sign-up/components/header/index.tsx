import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as S from './styles'
import Logo from '@/assets/images/marketspace-logo.svg'

export function Header() {
  const insets = useSafeAreaInsets()
  return (
    <S.Header style={{ marginTop: insets.top + 20 }}>
      <Logo width={60} />
      <S.Title>Boas Vindas!</S.Title>
      <S.Subtitle>
        Crie sua conta e use o espaço para comprar {'\n'} itens variados e
        vender seus produtos
      </S.Subtitle>
    </S.Header>
  )
}
