import { View, Image, Text, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const CardPressable = styled(Pressable)``

export const ImageContainer = styled(View)`
  position: relative;
`
export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
  z-index: 100;
  border-radius: 8px;
`

export const ImageAd = styled(Image)`
  width: 153px;
  height: 100px;
  flex-grow: 1;
  border-radius: 8px;
  object-fit: cover;
`

export const Condition = styled(View)<{ isNew: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 10;
  border-radius: 50px;
  padding: 2px 8px;
  background-color: ${(props) =>
    props.isNew === true
      ? props.theme.colors.blue
      : props.theme.colors['gray-1']};
`

export const ConditionText = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors['gray-7']};
  text-transform: uppercase;
`

export const StatusText = styled(Text)`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['gray-7']};
  position: absolute;
  bottom: 8px;
  left: 8px;
  z-index: 110;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-family: ${(props) => props.theme.fontFamily.bold};
`

export const TitleContainer = styled.View`
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${({ theme }) => theme.colors['gray-2']};
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-top: 4px;
  flex: 1;
  flex-wrap: wrap;
`

export const Currency = styled.Text`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${({ theme }) => theme.colors['gray-2']};
  font-family: ${(props) => props.theme.fontFamily.bold};
  text-transform: uppercase;
  margin-right: 4px;
`
export const Price = styled.Text`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${({ theme }) => theme.colors['gray-1']};
  font-family: ${(props) => props.theme.fontFamily.bold};
`
