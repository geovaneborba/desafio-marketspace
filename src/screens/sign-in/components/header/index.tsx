import Logo from '@/assets/images/marketspace-logo.svg'
import * as S from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
export function Header() {
  const insets = useSafeAreaInsets()
  return (
    <S.Header
      style={{
        marginTop: insets.top + 65,
      }}
    >
      <Logo />
      <S.Title>marketspace</S.Title>
      <S.Subtitle>Seu espaço de compra e venda</S.Subtitle>
    </S.Header>
  )
}
