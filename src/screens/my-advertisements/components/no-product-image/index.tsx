import Image from '@/assets/images/no-product-image.svg'

import * as S from './styles'

export function NoProductImage() {
  return (
    <S.Container>
      <Image width={153} height={100} />
    </S.Container>
  )
}
