import styled from 'styled-components/native'

export const Header = styled.View`
  align-items: center;
  margin-top: 65px;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize['4xl']};
  letter-spacing: -1px;
`
export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-3']};
`
