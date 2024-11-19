import styled from 'styled-components/native'

export const Header = styled.View`
  padding: 20px 24px;
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  align-self: center;
  margin: 0 auto;
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors['gray-1']};
`
