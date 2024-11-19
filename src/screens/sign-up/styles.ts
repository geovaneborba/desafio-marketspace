import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(ScrollView).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors['gray-6']};
`

export const Form = styled.View`
  row-gap: 16px;
  margin: 0 48px;
`
