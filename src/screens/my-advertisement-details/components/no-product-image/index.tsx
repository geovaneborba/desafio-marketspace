import Image from '@/assets/images/no-product-image.svg'

import * as S from './styles'

type NoProductImageProps = {
  isActive?: boolean
}

export function NoProductImage({ isActive }: NoProductImageProps) {
  return (
    <S.Container>
      <Image />

      {!isActive && (
        <S.Overlay>
          <S.StatusText>anúncio desativado</S.StatusText>
        </S.Overlay>
      )}
    </S.Container>
  )
}
