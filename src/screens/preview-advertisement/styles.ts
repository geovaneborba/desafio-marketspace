import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const ScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexDirection: 'column',
    flexGrow: 1,
  },
})``

export const Footer = styled.View`
  background-color: ${(props) => props.theme.colors['gray-7']};
  height: 90px;
  padding-top: 20px;
  margin-top: auto;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 0 24px;
`
