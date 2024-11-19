import { styled } from 'styled-components/native'

export const Container = styled.View``

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  margin-top: 20px;
  margin-bottom: 32px;
`

export const User = styled.View`
  flex: 1;
  flex-direction: row;
`

export const UserAvatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 9999px;
  border-width: 3px;
  border-color: ${(props) => props.theme.colors['blue-light']};
`

export const Greeting = styled.Text`
  margin-left: 10px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-1']};
  font-size: ${(props) => props.theme.fontSize.base};
`

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.theme.colors['gray-1']};
  font-size: ${(props) => props.theme.fontSize.base};
`
