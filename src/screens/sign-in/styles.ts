import styled from 'styled-components/native'
import { View, Text, ScrollView } from 'react-native'

export const Container = styled(ScrollView).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
}))``

export const Content = styled(View)`
  background-color: ${(props) => props.theme.colors['gray-6']};
  flex: 1;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

export const Form = styled(View)`
  margin-top: 56px;
  padding: 0 48px;
  row-gap: 16px;
`
export const FormTitle = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
  font-size: ${(props) => props.theme.fontSize['md']};
  text-align: center;
  margin-bottom: 16px;
`
