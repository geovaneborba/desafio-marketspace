import styled from 'styled-components/native'

export const Header = styled.View`
  align-items: center;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize['xl']};
  color: ${(props) => props.theme.colors['gray-1']};
`
export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
  font-size: ${(props) => props.theme.fontSize['md']};
  margin-top: 8px;
`
