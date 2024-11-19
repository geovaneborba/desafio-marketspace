import styled from 'styled-components/native'

import { ProductCurrency } from '../home/components/card-advertisement/styles'

export const Container = styled.View`
  flex: 1;
`
export const ScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  style: {
    flex: 1,
    position: 'relative',
  },
})``

export const BackButton = styled.TouchableOpacity`
  margin-left: 24px;
  margin-top: 20px;
  margin-bottom: 12px;
`

export const Footer = styled.View`
  background-color: ${(props) => props.theme.colors['gray-7']};
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`

export const Currency = styled(ProductCurrency)`
  color: ${(props) => props.theme.colors['blue-light']};
`

export const FooterCurrency = styled(Currency)`
  color: ${(props) => props.theme.colors.blue};
`

export const FooterPrice = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize['2xl']};
  color: ${(props) => props.theme.colors['blue']};
`
