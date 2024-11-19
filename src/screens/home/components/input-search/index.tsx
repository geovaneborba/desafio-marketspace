import { useCallback, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'
import { MagnifyingGlass, Sliders } from 'phosphor-react-native'

import * as S from './styles'
import { useSearchForm } from '@/contexts/search-form'

type InputSearchProps = TextInputProps & {
  onOpenBottomSheet: () => void
}

export function InputSearch({ onOpenBottomSheet, ...props }: InputSearchProps) {
  const theme = useTheme()
  const { fetchFilteredProducts } = useSearchForm()

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Input isFocused={isFocused}>
      <S.InputSearch onFocus={handleFocus} onBlur={handleBlur} {...props} />

      <S.TouchableIcon onPress={fetchFilteredProducts}>
        <MagnifyingGlass size={20} color={theme.colors['gray-2']} />
      </S.TouchableIcon>

      <S.Divider />

      {/* FILTER */}
      <S.TouchableIcon onPress={onOpenBottomSheet}>
        <Sliders size={20} color={theme.colors['gray-2']} />
      </S.TouchableIcon>
    </S.Input>
  )
}
