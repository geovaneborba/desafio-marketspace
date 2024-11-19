import styled from 'styled-components/native'

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 20px 24px 24px;
`

export const Avatar = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  border: 2px solid ${(props) => props.theme.colors['blue-light']};
`

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-1']};
  font-size: ${(props) => props.theme.fontSize.sm};
`
