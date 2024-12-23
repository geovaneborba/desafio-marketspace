import { useMemo, useState } from 'react'
import { RadioButtonProps } from 'react-native-radio-buttons-group'
import { useTheme } from 'styled-components/native'
import * as S from './styles'

import { View } from 'react-native'

import { InputErrorMessage } from '@/components/input-error-message'
import { useAdvertisementForm } from '@/contexts/advertisement-form'

type InputRadioProps = {
  defaultValue: boolean
  errorMessage: string | undefined
}

export function InputRadio({ defaultValue, errorMessage }: InputRadioProps) {
  const theme = useTheme()
  const {
    methods: { setValue },
  } = useAdvertisementForm()

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: 'new',
        label: 'Produto novo',
        color: theme.colors['blue-light'],
        size: 24,
      },
      {
        id: 'used',
        label: 'Produto usado',
        color: theme.colors['blue-light'],
        size: 24,
      },
    ],
    [],
  )

  const [selectedId, setSelectedId] = useState<string | undefined>(() => {
    if (defaultValue) {
      return 'new'
    }
    return 'used'
  })

  const handleSelect = (selectedId: string) => {
    setSelectedId(selectedId)
    setValue('isNew', selectedId === 'new' ? true : false)
  }

  return (
    <View>
      <S.RadioGroup
        radioButtons={radioButtons}
        onPress={handleSelect}
        selectedId={selectedId}
      />
      {!!errorMessage && <InputErrorMessage errorMessage={errorMessage} />}
    </View>
  )
}
