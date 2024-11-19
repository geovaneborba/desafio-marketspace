import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

import { Button } from '@/components/button/button'
import { AuthRoutesNavigatorProps } from '@/routes/auth.routes'

export function Footer() {
  const navigation = useNavigation<AuthRoutesNavigatorProps>()
  return (
    <S.Footer>
      <S.Title>Ainda não tem acesso?</S.Title>

      <Button variant="gray-5" onPress={() => navigation.navigate('signUp')}>
        <Button.Text variant="gray-2">Criar uma conta</Button.Text>
      </Button>
    </S.Footer>
  )
}
