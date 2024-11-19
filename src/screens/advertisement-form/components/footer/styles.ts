import styled from 'styled-components/native'

export const Footer = styled.View`
  background-color: ${(props) => props.theme.colors['gray-7']};
  height: 90px;
  padding-top: 20px;
`

export const Container = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 0 24px;
`
