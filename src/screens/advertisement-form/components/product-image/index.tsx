import { ImagePicker } from '../image-picker'
import * as S from './styles'

export function ProductImage() {
  return (
    <S.Container>
      <S.Label>Imagens</S.Label>

      <S.Description>
        Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!
      </S.Description>

      <ImagePicker />
    </S.Container>
  )
}
