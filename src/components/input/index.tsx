import { useCallback, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInputProps, TouchableOpacity } from 'react-native'
import { EyeSlash, Eye } from 'phosphor-react-native'

import * as S from '@/components/input/styles'

type InputProps = TextInputProps & {
  isError?: boolean
}

type InputPasswordProps = TextInputProps & {
  isError?: boolean
}

export function Input({ isError, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.InputField
      isError={isError}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  )
}

export function InputPassword({ isError, ...props }: InputPasswordProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const theme = useTheme()

  const handleTogglePasswordVisibility = useCallback(() => {
    setIsSecureTextEntry((state) => !state)
  }, [])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Input isFocused={isFocused} isError={isError}>
      <S.InputFieldPassword
        secureTextEntry={isSecureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <TouchableOpacity onPress={handleTogglePasswordVisibility}>
        {isSecureTextEntry ? (
          <EyeSlash color={theme.colors['gray-3']} size={20} />
        ) : (
          <Eye color={theme.colors['gray-3']} size={20} />
        )}
      </TouchableOpacity>
    </S.Input>
  )
}

export function InputPrice({ ...props }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Input isFocused={isFocused} style={{ gap: 8 }}>
      <S.CurrencyContainer>
        <S.Currency>R$</S.Currency>
      </S.CurrencyContainer>
      <S.InputPrice onFocus={handleFocus} onBlur={handleBlur} {...props} />
    </S.Input>
  )
}
