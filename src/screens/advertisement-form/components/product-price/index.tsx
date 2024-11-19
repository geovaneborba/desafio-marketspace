import { Controller } from 'react-hook-form'
import { useAdvertisementForm } from '@/contexts/advertisement-form'
import { InputPrice } from '@/components/input'

import * as S from './styles'

import { InputErrorMessage } from '@/components/input-error-message'

import {
  convertTextToCurrency,
  formatToBRLCurrency,
} from '@/utils/format-product-price'

export function ProductPrice() {
  const {
    methods: {
      control,
      setValue,
      formState: { errors },
    },
  } = useAdvertisementForm()

  const handlePriceChange = (value: string) => {
    const number = convertTextToCurrency(value)
    setValue('price', number ?? 0)
  }

  return (
    <S.Container>
      <S.Label>Venda</S.Label>

      <Controller
        control={control}
        name="price"
        render={({ field }) => (
          <>
            <InputPrice
              value={field.value ? formatToBRLCurrency(field.value) : ''}
              onChangeText={handlePriceChange}
              keyboardType="decimal-pad"
              placeholder="Valor do produto"
            />
            {errors.price && (
              <InputErrorMessage errorMessage={errors.price.message} />
            )}
          </>
        )}
      />
    </S.Container>
  )
}
