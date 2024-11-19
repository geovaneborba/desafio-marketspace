import { useAdvertisementForm } from '@/contexts/advertisement-form'

import * as S from './styles'
import { Controller } from 'react-hook-form'
import { Input } from '@/components/input'
import { InputErrorMessage } from '@/components/input-error-message'

export function ProductDescription() {
  const {
    methods: {
      control,
      formState: { errors },
    },
  } = useAdvertisementForm()

  return (
    <S.Container>
      <S.Label>Sobre o produto</S.Label>

      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <>
            <Input
              placeholder="Título do anúncio"
              value={field.value}
              onChangeText={field.onChange}
            />
            {errors.name && (
              <InputErrorMessage errorMessage={errors.name.message} />
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <>
            <Input
              placeholder="Descrição do produto"
              multiline
              style={{
                height: 160,
                textAlignVertical: 'top',
              }}
              value={field.value}
              onChangeText={field.onChange}
            />
            {errors.description && (
              <InputErrorMessage errorMessage={errors.description.message} />
            )}
          </>
        )}
      />
    </S.Container>
  )
}
