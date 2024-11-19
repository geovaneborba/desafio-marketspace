import { useCallback, useState } from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'

import { useTheme } from 'styled-components/native'

import * as S from './styles'

import { Linking } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { formatToBRLCurrency } from '@/utils/format-product-price'

type DialogContactProps = {
  advertisement?: {
    user?: {
      tel?: string
    }
    name?: string
    price?: number
  }
  onClose: () => void
  isOpen: boolean
}

export function DialogContact({
  advertisement,
  isOpen,
  onClose,
}: DialogContactProps) {
  const theme = useTheme()

  const handleContact = async () => {
    const tel = String(advertisement?.user?.tel)
    const url = new URL(`https://wa.me/55${tel}`)

    url.searchParams.append(
      'text',
      `Olá, gostaria de comprar seu ${advertisement?.name} por R$ ${formatToBRLCurrency(advertisement?.price ?? 0)}`,
    )

    await Linking.openURL(String(url))

    onClose()
  }

  return (
    <Portal>
      <Dialog
        visible={isOpen}
        onDismiss={onClose}
        style={{ backgroundColor: theme.colors['gray-7'] }}
      >
        <Dialog.Content>
          <S.Title>Contato</S.Title>
          <S.Text>
            Deseja entrar em contato com o vendedor pelo WhatsApp?
          </S.Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button textColor={theme.colors['gray-1']} onPress={onClose}>
            Nåo
          </Button>
          <Button textColor={theme.colors['gray-1']} onPress={handleContact}>
            Sim
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}
