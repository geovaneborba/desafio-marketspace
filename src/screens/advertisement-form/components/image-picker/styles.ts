import styled from 'styled-components/native'
import { Image as ImageNative } from 'react-native'

export const ImagePickerContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 32px;
  flex-direction: row;
  gap: 8px;
`

export const ImageContainer = styled.View`
  height: 100px;
  width: 100px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['gray-5']};
  position: relative;
`
export const ButtonRemoveImage = styled.Pressable`
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors['gray-1']};
  padding: 2px;
`

export const Image = styled(ImageNative)`
  height: 100px;
  width: 100px;
  border-radius: 6px;
`

export const ButtonAddImage = styled.Pressable`
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['gray-5']};
`
