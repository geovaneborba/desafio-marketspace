import { TextInput, View } from 'react-native'
import styled, { css } from 'styled-components/native'

type InputFieldProps = {
  isFocused?: boolean
  isError?: boolean
}

export const InputField = styled(TextInput).attrs<InputFieldProps>((props) => ({
  placeholderTextColor: props.theme.colors['gray-4'],
}))`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
  background-color: ${(props) => props.theme.colors['gray-7']};
  padding: 12px 16px;
  border-radius: 6px;
  flex-direction: row;
  border: 1px solid transparent;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid ${(props) => props.theme.colors['gray-3']};
    `};

  ${(props) =>
    props.isError &&
    css`
      border: 1px solid ${(props) => props.theme.colors['red-light']};
    `};
`

export const Input = styled(View)<InputFieldProps>`
  background-color: ${(props) => props.theme.colors['gray-7']};
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid transparent;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid ${(props) => props.theme.colors['gray-3']};
    `};

  ${(props) =>
    props.isError &&
    css`
      border: 1px solid ${(props) => props.theme.colors['red-light']};
    `};
`

export const InputFieldPassword = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.colors['gray-4'],
}))`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
  flex: 1;
`

export const CurrencyContainer = styled.View`
  gap: 8px;
`
export const Currency = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-1']};
  font-size: ${(props) => props.theme.fontSize.base};
`
export const InputPrice = styled.TextInput`
  flex: 1;
`
