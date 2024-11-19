import { Pressable, Switch as SwitchNative } from 'react-native'
import { styled } from 'styled-components/native'

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize['xl']};
  color: ${(props) => props.theme.colors['gray-1']};
`

export const CloseButton = styled(Pressable)`
  padding: 8px;
`

export const ConditionContainer = styled.View`
  margin-top: 24px;
`
export const ConditionTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-2']};
  margin-bottom: 12px;
`
export const ConditionOptions = styled.View`
  flex-direction: row;
  gap: 8px;
`
export const ConditionOption = styled.View<{
  condition: string
}>`
  border-radius: 9999px;
  padding: 6px;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.condition === 'novo'
      ? props.theme.colors['blue-light']
      : props.theme.colors['gray-5']};

  padding-right: ${(props) => (props.condition === 'novo' ? 6 : 16)}px;
  padding-left: 16px;
`
export const ConditionOptionText = styled.Text<{
  condition: string
}>`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) =>
    props.condition === 'novo'
      ? props.theme.colors['gray-7']
      : props.theme.colors['gray-3']};
  text-transform: uppercase;
`
export const ContainerIcon = styled.View`
  background-color: ${(props) => props.theme.colors['gray-7']};
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
`

export const Trade = styled.View`
  margin-top: 24px;
`
export const TradeTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-2']};
  margin-bottom: 12px;
`

export const Switch = styled(SwitchNative).attrs((props) => ({
  trackColor: {
    false: props.theme.colors['gray-5'],
    true: props.theme.colors['blue-light'],
  },
  thumbColor: props.theme.colors['gray-7'],
  ios_backgroundColor: props.theme.colors['gray-4'],
}))``

export const PaymentMethods = styled.View`
  margin-top: 24px;
`
export const PaymentMethodTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors['gray-2']};
  margin-bottom: 12px;
`

export const PaymentMethodRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  margin-top: 65px;
`
