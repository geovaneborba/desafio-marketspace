import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import {
  BottomSheetView,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import { useMemo } from 'react'
import { useTheme } from 'styled-components/native'
import { theme } from '@/styles/theme'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

import { Button } from '@/components/button/button'
import * as S from './styles'
import { X } from 'phosphor-react-native'

import { Switch } from '@/screens/home/components/switch'

import { Checkbox } from '../checkbox'

import { SelectCondition } from '../select'
import { useSearchForm } from '@/contexts/search-form'

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const theme = useTheme()

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedIndex.value, [0, 1], [0, 1]),
    }
  })

  const containerStyle = useMemo(
    () => [
      style,
      containerAnimatedStyle,
      {
        backgroundColor: theme.colors['gray-1'],
      },
    ],
    [style, containerAnimatedStyle],
  )

  return <Animated.View style={containerStyle} />
}

type FilterAdProps = {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>
}

export function FilterAdvertisement({ bottomSheetModalRef }: FilterAdProps) {
  const snapPoints = useMemo(() => ['40%', '75%'], [])

  const { handleClearFilters, fetchFilteredProducts } = useSearchForm()

  const handleCloseBottomSheet = () => {
    bottomSheetModalRef.current?.dismiss()
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      backdropComponent={CustomBackdrop}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose
    >
      <BottomSheetView
        style={{
          flex: 1,
          paddingTop: 32,
          paddingHorizontal: 24,
        }}
      >
        {/* HEADER */}
        <S.Header>
          <S.Title>Filtrar anúncios</S.Title>

          <S.CloseButton onPress={handleCloseBottomSheet}>
            <X size={24} color={theme.colors['gray-4']} />
          </S.CloseButton>
        </S.Header>

        {/* Novo ou usado */}
        <S.ConditionContainer>
          <S.ConditionTitle>Condição</S.ConditionTitle>

          <SelectCondition />
        </S.ConditionContainer>

        {/* Aceita troca */}
        <S.Trade>
          <S.TradeTitle>Aceita troca?</S.TradeTitle>

          <Switch />
        </S.Trade>

        {/* Métodos de pagamentos */}
        <S.PaymentMethods>
          <S.PaymentMethodTitle>Métodos de pagamento:</S.PaymentMethodTitle>

          <Checkbox />
        </S.PaymentMethods>

        <S.Footer>
          <Button
            variant="gray-5"
            style={{ flex: 1 }}
            onPress={() => {
              handleClearFilters()
              fetchFilteredProducts()
            }}
          >
            <Button.Text variant="gray-2">Resetar Filtros</Button.Text>
          </Button>

          <Button
            variant="gray-1"
            style={{ flex: 1 }}
            onPress={() => {
              fetchFilteredProducts()
              handleCloseBottomSheet()
            }}
          >
            <Button.Text variant="gray-7">Aplicar filtros</Button.Text>
          </Button>
        </S.Footer>
      </BottomSheetView>
    </BottomSheetModal>
  )
}
