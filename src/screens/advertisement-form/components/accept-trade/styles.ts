import styled from 'styled-components/native'

export const Trade = styled.View`
  gap: 12px;
`

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors['gray-2']};
`
