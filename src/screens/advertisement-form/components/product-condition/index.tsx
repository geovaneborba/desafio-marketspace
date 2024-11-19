import { Controller } from 'react-hook-form'
import { useAdvertisementForm } from '@/contexts/advertisement-form'
import { InputRadio } from '../input-radio'

export function ProductCondition() {
  const {
    methods: {
      control,
      formState: { errors },
    },
  } = useAdvertisementForm()

  return (
    <Controller
      control={control}
      name="isNew"
      render={({ field }) => {
        return (
          <InputRadio
            defaultValue={field.value}
            errorMessage={errors.isNew && errors.isNew.message}
          />
        )
      }}
    />
  )
}
