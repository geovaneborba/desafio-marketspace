import styled from 'styled-components/native'
import CheckboxExpo from 'expo-checkbox'

export const Container = styled.View``

export const CheckboxItem = styled.Pressable`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`

export const Checkbox = styled(CheckboxExpo)`
  width: 24px;
  height: 24px;
`

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors['gray-2']};
`
