import { api } from '@/lib/axios'
import { useCallback, useRef, useState } from 'react'
import { Dimensions, FlatList, ViewToken } from 'react-native'

import * as S from './styles'

import { CarouselItem } from '../carousel-item'
import { CarouselPagination } from '../carousel-pagination'

type CarouselItem = {
  name?: string
  uri?: string
  type?: string
  id?: string
  path?: string
}

type CarouselProps = {
  images?: {
    id: string
    path: string
  }[]
  isActive?: boolean | undefined
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const image = item as CarouselItem

          return <CarouselItem image={image} />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('window').width + 10}
        decelerationRate="fast"
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      {images && images?.length > 1 && (
        <CarouselPagination
          total={images?.length}
          paginationIndex={paginationIndex}
        />
      )}

      {!isActive && (
        <S.Overlay>
          <S.StatusText>anúncio desativado</S.StatusText>
        </S.Overlay>
      )}
    </S.Container>
  )
}
