import styled from 'styled-components/native'

export const Description = styled.View`
  margin: 0 24px 24px;
`

export const TagContainer = styled.View`
  background-color: ${(props) => props.theme.colors['gray-5']};
  padding: 2px 8px;
  border-radius: 9999px;
  margin-bottom: 8px;
  align-self: flex-start;
`

export const Tag = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors['gray-2']};
  text-transform: uppercase;
`

export const Header = styled.View`
  flex-direction: row;
  margin: 8px 0;
`

export const DescriptionTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors['gray-1']};
`
export const Currency = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-1']};
  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors['blue-light']};
  margin-left: auto;
`

export const DescriptionText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors['gray-2']};
`
