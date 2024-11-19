import styled from 'styled-components/native'

export const Container = styled.View``

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors['gray-2']};
`

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-3']};
  margin-top: 4px;
`
