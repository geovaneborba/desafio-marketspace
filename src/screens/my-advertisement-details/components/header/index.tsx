import { ArrowLeft, PencilSimpleLine } from 'phosphor-react-native'

import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'

type HeaderProps = {
  productId: string
}
export function Header({ productId }: HeaderProps) {
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesNavigatorProps>()

  return (
    <S.Header>
      <S.BackButton onPress={() => navigation.navigate('myAdvertisements')}>
        <ArrowLeft size={24} color={theme.colors['gray-1']} />
      </S.BackButton>

      <S.EditButton
        onPress={() =>
          navigation.navigate('advertisementForm', {
            id: productId,
            mode: 'edit',
          })
        }
      >
        <PencilSimpleLine size={24} color={theme.colors['gray-1']} />
      </S.EditButton>
    </S.Header>
  )
}
