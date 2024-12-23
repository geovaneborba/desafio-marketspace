import { api } from '@/lib/axios'
import { useCallback, useRef, useState } from 'react'
import { Dimensions, FlatList, ViewToken } from 'react-native'

import * as S from './styles'

import { Pagination } from '../pagination'

type CarouselItem = {
  item: {
    name?: string
    uri?: string
    type?: string
    id?: string
    path?: string
  }
}

type CarouselProps = {
  images: {
    name: string
    type: string
    uri: string
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

  const renderItems = ({ item }: CarouselItem) => {
    let imageUri

    if (item.path) {
      imageUri = `${api.defaults.baseURL}/images/${item.path}`
    } else if (item.uri) {
      imageUri = item.uri
    }

    return (
      <S.CarouselItem>
        <S.Image
          source={{
            uri: imageUri,
          }}
        />
      </S.CarouselItem>
    )
  }

  return (
    <S.Container>
      <S.FlatList
        data={images}
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('window').width + 10}
        decelerationRate="fast"
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      {images.length > 1 && (
        <Pagination total={images?.length} paginationIndex={paginationIndex} />
      )}

      {isActive === false && (
        <S.Overlay>
          <S.StatusText>anúncio desativado</S.StatusText>
        </S.Overlay>
      )}
    </S.Container>
  )
}
