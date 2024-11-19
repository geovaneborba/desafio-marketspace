import styled from 'styled-components/native'

export const Payments = styled.View`
  margin: 0 24px 24px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
`

export const Payment = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`
export const Text = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
`
