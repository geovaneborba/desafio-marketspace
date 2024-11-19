import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as S from './styles'
type HeaderProps = {
  title: string
  subtitle: string
}
export function Header({ title, subtitle }: HeaderProps) {
  const insets = useSafeAreaInsets()
  return (
    <S.Header>
      <S.Title style={{ paddingTop: insets.top }}>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Header>
  )
}
