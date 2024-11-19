import { View, Image, Text, Pressable } from 'react-native'
import styled from 'styled-components/native'

export const ProductItemPressable = styled(Pressable)``

export const ContainerRelative = styled(View)`
  position: relative;
`
export const ProfileImage = styled.Image`
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 10;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors['gray-7']};
`
export const ProductCondition = styled(View)<{ isNew: boolean }>`
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
export const ProductConditionText = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors['gray-7']};
  text-transform: uppercase;
`
export const ProductImage = styled(Image)`
  width: 153px;
  height: 100px;
  flex-grow: 1;
  border-radius: 8px;
  object-fit: cover;
`
export const ProductName = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${({ theme }) => theme.colors['gray-2']};
  margin-top: 4px;
`
export const ProductCurrency = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-1']};
  text-transform: uppercase;
`
export const ProductPrice = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${({ theme }) => theme.colors['gray-1']};
`
