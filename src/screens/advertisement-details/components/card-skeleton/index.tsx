import { useEffect } from 'react'

import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

import * as S from './styles'
import { ViewProps } from 'react-native'

type SkeletonProps = ViewProps & {
  width: number
  height: number
  borderRadius: number
}

export function CardSkeleton({
  width,
  height,
  borderRadius,
  ...rest
}: SkeletonProps) {
  const shimmerTranslateX = useSharedValue(-1)

  const startAnimation = () => {
    shimmerTranslateX.value = withTiming(
      1,
      {
        duration: 1000,
        easing: Easing.linear,
      },
      (finished) => {
        if (finished) {
          shimmerTranslateX.value = -1 // Reinicia a posição
          runOnJS(startAnimation)() // Reinicia a animação
        }
      },
    )
  }

  useEffect(() => {
    startAnimation()
  }, [])

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslateX.value * width }],
  }))

  return (
    <S.Skeleton
      style={{
        height,
        borderRadius,
        width,
      }}
      {...rest}
    >
      <S.Shimmer style={[shimmerStyle, { borderRadius }]} />
    </S.Skeleton>
  )
}
