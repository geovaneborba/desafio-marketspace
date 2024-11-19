import { Bank, Barcode, CreditCard, Money, QrCode } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import * as S from './styles'

type PaymentsProps = {
  paymentMethods:
    | {
        key: string
        name: string
      }[]
    | undefined
}
export function Payments({ paymentMethods }: PaymentsProps) {
  const theme = useTheme()

  const payments = [
    {
      icon: Barcode,
      label: 'Boleto',
      value: 'boleto',
    },
    {
      icon: QrCode,
      label: 'Pix',
      value: 'pix',
    },
    {
      icon: Money,
      label: 'Dinheiro',
      value: 'cash',
    },
    {
      icon: CreditCard,
      label: 'Cartão de Crédito',
      value: 'card',
    },
    {
      icon: Bank,
      label: 'Depósito Bancário',
      value: 'deposit',
    },
  ]

  const selectedPayments = paymentMethods
    ?.map((method) => payments.find((payment) => payment.value === method.key))
    .filter((payment) => payment !== undefined)

  return (
    <S.Payments>
      <S.Title>Meios de pagamento:</S.Title>

      {selectedPayments?.map(({ icon: Icon, label }) => (
        <S.Payment key={label}>
          <Icon size={18} color={theme.colors['gray-1']} />
          <S.Text>{label}</S.Text>
        </S.Payment>
      ))}
    </S.Payments>
  )
}
