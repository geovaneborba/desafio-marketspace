import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const ScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  style: {
    flex: 1,
  },
})``

export const Form = styled.View`
  padding: 0 24px;
`
