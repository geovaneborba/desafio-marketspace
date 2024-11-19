import { useEffect, useState } from 'react'
import { X } from 'phosphor-react-native'

import * as S from './styles'
import { useTheme } from 'styled-components'
import { useSearchForm } from '@/contexts/search-form'

export function SelectCondition() {
  const { searchFormData, setSearchFormData } = useSearchForm()
  const theme = useTheme()

  const isNewSelected = searchFormData.isNew === 'new'
  const isUsedSelected = searchFormData.isNew === 'used'

  const handleRemoveSelection = () => {
    setSearchFormData((prevState) => ({
      ...prevState,
      isNew: undefined,
    }))
  }

  return (
    <S.Select>
      <S.Option
        isSelected={isNewSelected ?? false}
        onPress={() => {
          setSearchFormData((prevState) => ({
            ...prevState,
            isNew: 'new',
          }))
        }}
      >
        <S.Text isSelected={isNewSelected ?? false}>novo</S.Text>
        {isNewSelected && (
          <S.Icon onPress={handleRemoveSelection}>
            <X size={16} color={theme.colors['blue-light']} />
          </S.Icon>
        )}
      </S.Option>

      <S.Option
        isSelected={isUsedSelected ?? false}
        onPress={() => {
          setSearchFormData((prevState) => {
            return {
              ...prevState,
              isNew: 'used',
            }
          })
        }}
      >
        <S.Text isSelected={isUsedSelected ?? false}>usado</S.Text>
        {isUsedSelected && (
          <S.Icon onPress={handleRemoveSelection}>
            <X size={16} color={theme.colors['blue-light']} />
          </S.Icon>
        )}
      </S.Option>
    </S.Select>
  )
}
