import { api } from '@/lib/axios'
import { useCallback, useRef, useState } from 'react'
import { Dimensions, FlatList, ListRenderItem, ViewToken } from 'react-native'

import * as S from './styles'

import { Pagination } from '../pagination'
import { CarouselItem } from '../carousel-item'

type CarouselProps = {
  images:
    | {
        id: string
        path: string
      }[]
    | undefined

  isActive: boolean | undefined
}

type CarouselItemProps = {
  id: string
  path: string
}

export function Carousel({ images, isActive }: CarouselProps) {
  const [paginationIndex, setPaginationIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (
        viewableItems[0].index !== undefined &&
        viewableItems[0].index !== null
      ) {
        setPaginationIndex(viewableItems[0].index)
      }
    },
    [],
  )

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ])

  return (
    <S.Container>
      <S.FlatList
        data={images}
        ref={flatListRef}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item }) => {
          const carouselItem = item as CarouselItemProps
          return <CarouselItem item={carouselItem} />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('window').width + 10}
        decelerationRate="fast"
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      {images?.length > 1 && (
        <Pagination total={images?.length} paginationIndex={paginationIndex} />
      )}

      {!isActive && (
        <S.Overlay>
          <S.StatusText>anúncio desativado</S.StatusText>
        </S.Overlay>
      )}
    </S.Container>
  )
}
