import * as S from './styles'

import { useTheme } from 'styled-components/native'
import { useSearchForm } from '@/contexts/search-form'

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
    searchFormData: { paymentMethods },
    setSearchFormData,
  } = useSearchForm()

  const handleValueChange = (option: PaymentMethods) => {
    let updatedPayments: PaymentMethods[]

    if (paymentMethods.some((payment) => payment.key === option.key)) {
      updatedPayments = paymentMethods.filter(
        (payment) => payment.key !== option.key,
      )
    } else {
      updatedPayments = [...paymentMethods, option]
    }

    setSearchFormData((prevState) => ({
      ...prevState,
      paymentMethods: updatedPayments,
    }))
  }

  return (
    <S.Container>
      {options.map((option) => {
        return (
          <S.CheckboxItem
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
          </S.CheckboxItem>
        )
      })}
    </S.Container>
  )
}
