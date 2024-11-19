import { Dimensions } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppRoutesNavigatorProps } from '@/routes/app.routes'

import { CardSkeleton } from '../card-skeleton'

import * as S from './styles'

export function AdvertisementSkeleton() {
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const insets = useSafeAreaInsets()
  const { width } = Dimensions.get('window')

  return (
    <S.Container>
      <S.BackButton
        style={{ paddingTop: insets.top }}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft color={theme.colors['gray-1']} />
      </S.BackButton>

      <CardSkeleton borderRadius={8} width={width} height={280} />

      <S.ContentWrapper>
        <S.UserInfoRow>
          <CardSkeleton borderRadius={100} width={24} height={24} />
          <CardSkeleton borderRadius={8} width={100} height={12} />
        </S.UserInfoRow>

        <CardSkeleton borderRadius={8} width={50} height={8} />

        <S.TitlePriceRow>
          <CardSkeleton borderRadius={8} width={100} height={12} />
          <CardSkeleton borderRadius={8} width={100} height={12} />
        </S.TitlePriceRow>

        <S.DescriptionContainer>
          <CardSkeleton borderRadius={8} width={300} height={8} />
          <CardSkeleton borderRadius={8} width={300} height={8} />
          <CardSkeleton borderRadius={8} width={270} height={8} />
          <CardSkeleton borderRadius={8} width={250} height={8} />
        </S.DescriptionContainer>

        <S.PaymentMethodsContainer>
          <S.PaymentMethodRow>
            <CardSkeleton borderRadius={8} width={24} height={24} />
            <CardSkeleton borderRadius={8} width={100} height={16} />
          </S.PaymentMethodRow>
          <S.PaymentMethodRow>
            <CardSkeleton borderRadius={8} width={24} height={24} />
            <CardSkeleton borderRadius={8} width={100} height={16} />
          </S.PaymentMethodRow>
          <S.PaymentMethodRow>
            <CardSkeleton borderRadius={8} width={24} height={24} />
            <CardSkeleton borderRadius={8} width={100} height={16} />
          </S.PaymentMethodRow>
        </S.PaymentMethodsContainer>

        <S.ButtonsContainer>
          <CardSkeleton borderRadius={8} width={width - 48} height={32} />
          <CardSkeleton borderRadius={8} width={width - 48} height={32} />
        </S.ButtonsContainer>
      </S.ContentWrapper>
    </S.Container>
  )
}
