import styled from 'styled-components/native'
import { ScrollView as ScrollViewNative } from 'react-native-gesture-handler'
import { FlatList as FlatListNative } from 'react-native'

export const Container = styled(ScrollViewNative).attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors['gray-6']};
`

export const ScrollViewFlatList = styled(ScrollViewNative).attrs({
  horizontal: true,
  contentContainerStyle: {
    width: '100%',
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
  },
})``

export const Form = styled.View`
  margin: 32px 24px 0;
`
export const Title = styled.Text`
  margin: 0 0 12px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors['gray-3']};
  margin-bottom: 12px;
`

export const FlatList = styled(FlatListNative).attrs({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 24,
    marginHorizontal: 24,
    marginTop: 24,
  },
})``
