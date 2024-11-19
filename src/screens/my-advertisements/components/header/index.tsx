import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Plus } from 'phosphor-react-native'

import { AppRoutesNavigatorProps } from '@/routes/app.routes'

import * as S from './styles'
export function Header() {
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  return (
    <S.Header>
      <S.Title>Meus anúncios</S.Title>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('advertisementForm', {
            mode: 'create',
            keepPreviousData: false,
          })
        }
      >
        <Plus color={theme.colors['gray-1']} />
      </TouchableOpacity>
    </S.Header>
  )
}
