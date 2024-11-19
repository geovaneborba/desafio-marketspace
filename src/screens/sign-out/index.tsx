import { useCallback, useState } from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '@/contexts/auth-context'

import { useTheme } from 'styled-components/native'

import * as S from './styles'

export function SignOut() {
  const { signOut } = useAuth()
  const [visible, setVisible] = useState(true)
  const navigation = useNavigation()
  const theme = useTheme()

  const hideDialog = () => {
    setVisible(false)
    navigation.goBack()
  }

  const handleSignOut = async () => {
    await signOut()
  }

  useFocusEffect(
    useCallback(() => {
      setVisible(true)
    }, []),
  )

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={{ backgroundColor: theme.colors['gray-7'] }}
      >
        <Dialog.Content>
          <S.Title>Sair</S.Title>
          <S.Text>Você tem certeza que deseja sair?</S.Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button textColor={theme.colors['gray-1']} onPress={hideDialog}>
            Nåo
          </Button>
          <Button textColor={theme.colors['gray-1']} onPress={handleSignOut}>
            Sim
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}
