import styled from 'styled-components/native'

export const Payments = styled.View`
  margin: 0 24px 24px;
`

export const PaymentTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
  margin-bottom: 8px;
`

export const PaymentItem = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`
export const PaymentText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
`
