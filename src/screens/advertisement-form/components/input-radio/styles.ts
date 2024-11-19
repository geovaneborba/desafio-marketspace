import styled from 'styled-components/native'
import { RadioGroup as RadioGroupNative } from 'react-native-radio-buttons-group'

export const RadioGroup = styled(RadioGroupNative).attrs(({ theme }) => ({
  layout: 'row',
  containerStyle: {
    marginBottom: 32,
  },
  labelStyle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: theme.colors['gray-2'],
  },
}))``
