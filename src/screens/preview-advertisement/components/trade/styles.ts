import styled from 'styled-components/native'

export const Trade = styled.View`
  padding: 0 24px 24px;
`
export const TextBold = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
`
export const Text = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
`
