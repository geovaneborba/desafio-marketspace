import styled from 'styled-components/native'

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors['gray-1']};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-bottom: 24px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors['gray-2']};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`
