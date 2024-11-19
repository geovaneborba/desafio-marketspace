import { theme } from '@/styles/theme'
import { Container, LoadIndicator } from './styles'

type LoadingProps = {
  variant?: keyof typeof theme.colors
}

export function Loading({ variant }: LoadingProps) {
  return (
    <Container>
      <LoadIndicator variant={variant} />
    </Container>
  )
}
