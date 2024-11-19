import { TouchableOpacityProps } from 'react-native'
import { ReactNode } from 'react'
import { IconProps, Icon } from 'phosphor-react-native'

import * as S from '@/components/button/styles'

type ButtonRootProps = S.ButtonProps &
  TouchableOpacityProps & {
    children: ReactNode
  }

type ButtonTextProps = S.ButtonTextProps & {
  children: ReactNode
}

type ButtonIconProps = IconProps & {
  icon: Icon
}

function Button({ children, variant, disabled, ...props }: ButtonRootProps) {
  return (
    <S.Container variant={variant} {...props}>
      {children}
    </S.Container>
  )
}

function ButtonText({ children, variant, ...props }: ButtonTextProps) {
  return (
    <S.ButtonText variant={variant} {...props}>
      {children}
    </S.ButtonText>
  )
}

function ButtonIcon({ icon: Icon, ...props }: ButtonIconProps) {
  return <Icon {...props} />
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
