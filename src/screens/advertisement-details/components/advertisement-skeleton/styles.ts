import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const BackButton = styled.TouchableOpacity`
  margin-left: 24px;
  margin-top: 20px;
  margin-bottom: 12px;
`

export const ContentWrapper = styled.View`
  padding: 24px;
`

export const UserInfoRow = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-bottom: 32px;
`

export const TitlePriceRow = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 16px;
`

export const DescriptionContainer = styled.View`
  gap: 8px;
  margin-bottom: 24px;
`

export const PaymentMethodRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const PaymentMethodsContainer = styled.View`
  gap: 8px;
  margin-bottom: 24px;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 24px;
`
