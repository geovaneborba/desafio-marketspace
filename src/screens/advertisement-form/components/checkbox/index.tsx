import * as S from './styles'

import { useTheme } from 'styled-components/native'

import { useAdvertisementForm } from '@/contexts/advertisement-form'
import { InputErrorMessage } from '@/components/input-error-message'

type PaymentMethods = {
  key: string
  name: string
}

const options = [
  {
    key: 'boleto',
    name: 'Boleto',
  },
  {
    key: 'pix',
    name: 'Pix',
  },
  {
    key: 'cash',
    name: 'Dinheiro',
  },
  {
    key: 'card',
    name: 'Cartão de Crédito',
  },

  {
    key: 'deposit',
    name: 'Depósito Bancário',
  },
]

export function Checkbox() {
  const theme = useTheme()
  const {
    methods: {
      setValue,
      watch,
      formState: { errors },
    },
  } = useAdvertisementForm()
  const paymentMethods = watch('paymentMethods') || []

  const handleValueChange = (option: PaymentMethods) => {
    let updatePaymentMethods: PaymentMethods[]

    if (paymentMethods.some((payment) => payment.key === option.key)) {
      updatePaymentMethods = paymentMethods.filter(
        (payment) => payment.key !== option.key,
      )
    } else {
      updatePaymentMethods = [...paymentMethods, option]
    }

    setValue('paymentMethods', updatePaymentMethods)
  }

  return (
    <>
      {options.map((option) => {
        return (
          <S.Container
            key={option.key}
            onPress={() => handleValueChange(option)}
          >
            <S.Checkbox
              value={paymentMethods.some(
                (payment) => payment.key === option.key,
              )}
              onValueChange={() => handleValueChange(option)}
              color={
                paymentMethods.some((payment) => payment.key === option.key)
                  ? theme.colors['blue-light']
                  : theme.colors['gray-4']
              }
            />
            <S.Label>{option.name}</S.Label>
          </S.Container>
        )
      })}

      {errors.paymentMethods && (
        <InputErrorMessage errorMessage={errors.paymentMethods.message} />
      )}
    </>
  )
}
