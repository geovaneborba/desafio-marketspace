import styled from 'styled-components/native'
import { theme } from '@/styles/theme'

type ContainerProps = {
  variant?: keyof typeof theme.colors
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoadIndicator = styled.ActivityIndicator.attrs<ContainerProps>(
  (props) => ({
    color: theme.colors[props.variant || 'gray-7'],
  }),
)``
