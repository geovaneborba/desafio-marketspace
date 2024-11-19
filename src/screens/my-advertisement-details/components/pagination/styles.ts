import styled from 'styled-components/native'
import { View } from 'react-native'

type IndicatorProps = {
  activeImageIndex: number
  imageIndex: number
}

export const Container = styled.View`
  flex-direction: row;
  gap: 1px;
  position: absolute;
  bottom: 2px;
`
export const Pagination = styled(View)<IndicatorProps>`
  height: 3px;
  flex: 1;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.imageIndex === props.activeImageIndex
      ? props.theme.colors['gray-7']
      : '#f7f7f880'};
`
