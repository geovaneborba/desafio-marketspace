import styled from 'styled-components/native'

export const Footer = styled.View`
  background-color: ${(props) => props.theme.colors['gray-7']};
  padding: 56px 48px 80px;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
  font-size: ${(props) => props.theme.fontSize['md']};
  text-align: center;
  margin-bottom: 16px;
`
