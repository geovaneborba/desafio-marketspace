import styled from 'styled-components/native'

export const Container = styled.View`
  gap: 16px;
  margin-bottom: 16px;
`

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors['gray-2']};
`
