import { InputErrorMessage } from '@/components/input-error-message'
import { Switch } from '@/components/switch'
import { useAdvertisementForm } from '@/contexts/advertisement-form'
import { Controller } from 'react-hook-form'

import * as S from './styles'

export function ProductTrade() {
  const {
    methods: {
      control,
      formState: { errors },
    },
  } = useAdvertisementForm()
  return (
    <S.Trade>
      <S.Label>Aceita troca?</S.Label>
      <Controller
        control={control}
        name="acceptTrade"
        render={({ field }) => (
          <>
            <Switch value={field.value} onValueChange={field.onChange} />
            {errors.acceptTrade && (
              <InputErrorMessage errorMessage={errors.acceptTrade.message} />
            )}
          </>
        )}
      />
    </S.Trade>
  )
}
