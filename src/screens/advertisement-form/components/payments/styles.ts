import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 16px;
  row-gap: 8px;
  margin-bottom: 24px;
`

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-2']};
  margin-bottom: 12px;
`
