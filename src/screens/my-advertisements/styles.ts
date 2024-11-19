import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)``

export const Filter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`
export const TotalAds = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-2']};
`

export const FlatList = styled.FlatList.attrs(() => ({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
}))`
  margin: 20px 0 64px;
  padding: 0 24px;
`
