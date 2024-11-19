import styled from 'styled-components/native'

export const ErrorMessage = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['red-light']};
  font-size: ${(props) => props.theme.fontSize.sm};
`
