import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
`

export const Footer = styled.View`
  padding: 0 24px;
  gap: 8px;
  margin-bottom: ${Platform.OS === 'ios' ? 0 : 32}px;
  margin-top: auto;
`
