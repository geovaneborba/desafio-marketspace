import styled, { css } from 'styled-components/native'

import { TextInput, View } from 'react-native'

type InputFieldProps = {
  isFocused?: boolean
  isError?: boolean
}

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

export const InputSearch = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.colors['gray-4'],
}))`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
  flex: 1;
`
export const InputContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`
export const TouchableIcon = styled.TouchableOpacity``

export const Divider = styled(View)`
  width: 1px;
  height: 18px;
  margin: 0 12px;
  background-color: ${(props) => props.theme.colors['gray-4']};
`
