import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

import { Button } from '@/components/button/button'

import { AuthRoutesNavigatorProps } from '@/routes/auth.routes'

export function Footer() {
  const navigation = useNavigation<AuthRoutesNavigatorProps>()

  return (
    <S.Footer>
      <S.Text>Já tem uma conta?</S.Text>

      <Button variant="gray-5" onPress={() => navigation.navigate('signIn')}>
        <Button.Text variant="gray-2">Ir para login</Button.Text>
      </Button>
    </S.Footer>
  )
}
