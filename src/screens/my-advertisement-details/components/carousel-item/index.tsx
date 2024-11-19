import { api } from '@/lib/axios'

import * as S from './styles'

type CarouselItemProps = {
  item: {
    id: string
    path: string
  }
}

export function CarouselItem({ item }: CarouselItemProps) {
  return (
    <S.CarouselItem>
      <S.Image
        source={{
          uri: `${api.defaults.baseURL}/images/${item.path}`,
        }}
      />
    </S.CarouselItem>
  )
}
