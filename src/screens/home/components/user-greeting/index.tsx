import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

import { Button } from '@/components/button/button'
import { useAuth } from '@/contexts/auth-context'
import { api } from '@/lib/axios'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getFirstLastName } from '@/utils/get-first-last-name'

export function UserGreeting() {
  const { user } = useAuth()
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const insets = useSafeAreaInsets()

  const userAvatarUrl = `${api.defaults.baseURL}/images/${user.avatar}`

  return (
    <S.Container
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <S.Header>
        <S.User>
          <S.UserAvatar source={{ uri: userAvatarUrl }} />
          <S.Greeting>
            Boas vindas, {'\n'}
            <S.Name>{getFirstLastName(user.name)}!</S.Name>
          </S.Greeting>
        </S.User>

        <Button
          variant="gray-1"
          onPress={() =>
            navigation.navigate('advertisementForm', {
              mode: 'create',
            })
          }
        >
          <Button.Icon icon={Plus} size={16} color={theme.colors['gray-7']} />
          <Button.Text variant="gray-7">Criar anúncio</Button.Text>
        </Button>
      </S.Header>
    </S.Container>
  )
}
