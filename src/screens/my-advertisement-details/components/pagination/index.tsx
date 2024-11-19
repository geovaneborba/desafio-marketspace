import * as S from './styles'
type PaginationProps = {
  total?: number
  paginationIndex: number
}

export function Pagination({ total = 0, paginationIndex }: PaginationProps) {
  return (
    <S.Container>
      {Array.from({ length: total }).map((_, imageIndex) => (
        <S.Pagination
          key={imageIndex}
          imageIndex={imageIndex}
          activeImageIndex={paginationIndex}
        />
      ))}
    </S.Container>
  )
}
