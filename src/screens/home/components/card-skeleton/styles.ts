import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const SkeletonContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  padding: 24px;
  flex-wrap: wrap;
`

export const Skeleton = styled.View`
  background-color: #e0e0e0;
  overflow: hidden;
`

export const Shimmer = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  opacity: 0.3;
`
