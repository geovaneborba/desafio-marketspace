import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  margin-top: 32px;
`

export const Avatar = styled.View`
  height: 88px;
  width: 88px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 3px solid ${(props) => props.theme.colors['blue-light']};
  position: relative;
`

export const AvatarImage = styled.Image`
  height: 82px;
  width: 82px;
  border-radius: 9999px;
`

export const ButtonChangeAvatar = styled.Pressable`
  position: absolute;
  bottom: 0;
  right: -10px;
  background-color: ${(props) => props.theme.colors['blue-light']};
  justify-items: center;
  align-items: center;
  display: flex;
  border-radius: 9999px;
  padding: 12px;
`
