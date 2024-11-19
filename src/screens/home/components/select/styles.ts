import { PressableProps } from 'react-native'
import styled from 'styled-components/native'

type OptionProps = PressableProps & {
  isSelected: boolean | undefined
}

export const Select = styled.View`
  flex-direction: row;
  gap: 8px;
`
export const Option = styled.Pressable<OptionProps>`
  border-radius: 9999px;
  padding: 6px;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors['blue-light']
      : props.theme.colors['gray-5']};

  padding-right: ${(props) => (props.isSelected ? 6 : 16)}px;
  padding-left: 16px;
`

export const Text = styled.Text<OptionProps>`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors['gray-7']
      : props.theme.colors['gray-3']};
  text-transform: uppercase;
  height: 16px;
`

export const Icon = styled.Pressable`
  background-color: ${(props) => props.theme.colors['gray-7']};
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
`
