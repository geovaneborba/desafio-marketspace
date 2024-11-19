import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const CarouselItem = styled.View`
  height: 280px;
  flex: 1;
`
export const Image = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: 100%;
`
