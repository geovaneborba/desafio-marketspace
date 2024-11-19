import { theme } from '@/styles/theme'
import * as S from './styles'
import { Bank, Barcode, CreditCard, Money, QrCode } from 'phosphor-react-native'
import { PaymentItem } from './styles'

const ICON_SIZE = 18
const ICON_COLOR = theme.colors['gray-1']

const availablePayments = [
  {
    type: 'boleto',
    icon: <Barcode size={ICON_SIZE} color={ICON_COLOR} />,
    label: 'Boleto',
  },
  {
    type: 'pix',
    icon: <QrCode size={ICON_SIZE} color={ICON_COLOR} />,
    label: 'Pix',
  },
  {
    type: 'cash',
    icon: <Money size={ICON_SIZE} color={ICON_COLOR} />,
    label: 'Dinheiro',
  },
  {
    type: 'card',
    icon: <CreditCard size={ICON_SIZE} color={ICON_COLOR} />,
    label: 'Cartão de Crédito',
  },
  {
    type: 'deposit',
    icon: <Bank size={ICON_SIZE} color={ICON_COLOR} />,
    label: 'Depósito Bancário',
  },
]

type PaymentsProps = {
  paymentMethods?: { key: string; name: string }[]
}

export function Payments({ paymentMethods }: PaymentsProps) {
  return (
    <S.Payments>
      <S.PaymentTitle>Meios de pagamento</S.PaymentTitle>

      {availablePayments
        .filter(({ type }) => paymentMethods?.some(({ key }) => key === type))
        .map(({ icon, label, type }) => (
          <PaymentItem key={type}>
            {icon}
            <S.PaymentText>{label}</S.PaymentText>
          </PaymentItem>
        ))}
    </S.Payments>
  )
}
