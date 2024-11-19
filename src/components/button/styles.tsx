import styled from 'styled-components/native'
import { TouchableOpacity, Text as TextNative } from 'react-native'
import { theme } from '@/styles/theme'

export type ButtonProps = {
  variant: keyof typeof theme.colors
}

export type ButtonTextProps = {
  variant: keyof typeof theme.colors
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['gray-5']};
  padding: 12px;
  text-align: center;
  gap: 12px;

  background-color: ${(props) => props.theme.colors[props.variant]};
`

export const ButtonText = styled(TextNative)<ButtonTextProps>`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors[props.variant]};
  font-family: ${(props) => props.theme.fontFamily.bold};
`
