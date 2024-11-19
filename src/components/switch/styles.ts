import { Switch as SwitchNative } from 'react-native'
import styled from 'styled-components/native'

export const Switch = styled(SwitchNative).attrs((props) => ({
  trackColor: {
    false: props.theme.colors['gray-5'],
    true: props.theme.colors['blue-light'],
  },
  thumbColor: props.theme.colors['gray-7'],
  ios_backgroundColor: props.theme.colors['gray-5'],
}))`
  align-self: flex-start;
`
