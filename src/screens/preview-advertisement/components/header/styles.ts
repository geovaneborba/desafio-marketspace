import styled from 'styled-components/native'

export const Header = styled.View`
  padding: 20px 24px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['blue-light']};
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors['gray-7']};
`
export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-7']};
`
