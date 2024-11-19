import { Button, Dialog, Portal } from 'react-native-paper'

import { useTheme } from 'styled-components/native'

import * as S from './styles'

type DialogContactProps = {
  isOpen: boolean
  productIsActive: boolean
  onClose: () => void
  onEditStatus: (status: boolean) => void
}

export function DialogAdvertisementStatus({
  isOpen,
  onClose,
  productIsActive,
  onEditStatus,
}: DialogContactProps) {
  const theme = useTheme()

  return (
    <Portal>
      <Dialog
        visible={isOpen}
        onDismiss={onClose}
        style={{ backgroundColor: theme.colors['gray-7'] }}
      >
        <Dialog.Content>
          <S.Title>
            {productIsActive ? 'Desativar' : 'Reativar'} anúncio
          </S.Title>
          <S.Text>
            Tem certeza que deseja {productIsActive ? 'desativar' : 'reativar'}{' '}
            esse anúncio?
          </S.Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button textColor={theme.colors['gray-1']} onPress={onClose}>
            Nåo
          </Button>
          <Button
            textColor={theme.colors['gray-1']}
            onPress={() => {
              if (productIsActive) {
                onEditStatus(false)
                onClose()
              } else {
                onEditStatus(true)
                onClose()
              }
            }}
          >
            Sim
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}
