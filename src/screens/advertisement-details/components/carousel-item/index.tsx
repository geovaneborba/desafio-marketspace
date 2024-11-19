import { api } from '@/lib/axios'
import * as S from './styles'

type CarouselItemProps = {
  image: {
    name?: string
    uri?: string
    type?: string
    id?: string
    path?: string
  }
}
export function CarouselItem({ image }: CarouselItemProps) {
  let imageUri

  if (image.path) {
    imageUri = `${api.defaults.baseURL}/images/${image.path}`
  } else if (image.uri) {
    imageUri = image.uri
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
