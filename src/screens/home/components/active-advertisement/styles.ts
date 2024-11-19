import styled from 'styled-components/native'

export const Container = styled.View``

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-3']};
  margin-bottom: 8px;
  margin: 0px 24px 12px;
`

export const Advertisement = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: rgba(100, 122, 199, 0.1);
  margin: 0 24px;
  padding: 12px 16px;
  gap: 16px;
  border-radius: 6px;
`

export const Info = styled.View``

export const Total = styled.Text`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.theme.colors['gray-2']};
`
export const Text = styled.Text`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-2']};
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  margin-left: auto;
  flex-direction: row;
  gap: 8px;
`
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-family: ${(props) => props.theme.fontFamily.bold};
`
