import { Control, Controller } from 'react-hook-form'

import { FilterMyAdvertisementFormData } from '../..'
import * as S from './styles'

type DropdownItem = {
  label: string
  value: 'all' | 'active' | 'disabled'
}

type DropdownProps = {
  control: Control<FilterMyAdvertisementFormData, any>
}

const dropdownOptions = [
  {
    value: 'all',
    label: 'Todos',
  },
  {
    value: 'active',
    label: 'Ativos',
  },
  {
    value: 'disabled',
    label: 'Inativos',
  },
]

export function FilterByStatus({ control }: DropdownProps) {
  return (
    <Controller
      control={control}
      name="status"
      render={({ field }) => (
        <S.Dropdown
          data={dropdownOptions}
          placeholder="Todos"
          value={field.value}
          valueField="value"
          labelField="label"
          onChange={(item: DropdownItem) => {
            field.onChange(item.value)
          }}
          search={false}
        />
      )}
    />
  )
}
