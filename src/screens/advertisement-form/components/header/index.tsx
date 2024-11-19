import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { useTheme } from 'styled-components'

import * as S from './styles'
import { ArrowLeft } from 'phosphor-react-native'

type HeaderProps = {
  mode: 'create' | 'edit'
}

export function Header({ mode }: HeaderProps) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const theme = useTheme()

  return (
    <S.Header style={{ paddingTop: insets.top + 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <ArrowLeft size={24} color={theme.colors['gray-1']} />
      </TouchableOpacity>

      <S.Title>
        {mode === 'create' ? 'Criar anúncio' : 'Editar anúncio'}
      </S.Title>
    </S.Header>
  )
}
