import { TextProps } from 'react-native'
import * as S from './styles'

type InputErrorMessageProps = TextProps & {
  errorMessage: string | undefined
}
export function InputErrorMessage({
  errorMessage,
  ...props
}: InputErrorMessageProps) {
  return <S.ErrorMessage {...props}>{errorMessage}</S.ErrorMessage>
}
