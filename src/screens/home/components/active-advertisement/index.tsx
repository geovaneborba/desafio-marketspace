import { theme } from '@/styles/theme'
import { Tag, ArrowRight } from 'phosphor-react-native'
import * as S from './styles'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { UserAdvertisementListDTO } from '@/dtos/user-advertisement-list-dto'
import { useCallback } from 'react'

export function ActiveAdvertisement() {
  const navigation = useNavigation<AppRoutesNavigatorProps>()

  const { data: myActiveAdvertisements, refetch } = useQuery({
    queryKey: ['my-active-advertisements'],
    queryFn: async () => {
      const response =
        await api.get<UserAdvertisementListDTO[]>('/users/products')
      return response.data
    },
  })

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

  return (
    <S.Container>
      <S.Title>Seus produtos anunciados para venda</S.Title>

      <S.Advertisement>
        <Tag size={20} color={theme.colors.blue} />

        <S.Info>
          <S.Total>
            {myActiveAdvertisements?.filter((ad) => ad.is_active)?.length}
          </S.Total>
          <S.Text>anúncios ativos</S.Text>
        </S.Info>

        <S.Button onPress={() => navigation.navigate('myAdvertisements')}>
          <S.ButtonText>Meus anúncios</S.ButtonText>
          <ArrowRight size={16} color={theme.colors.blue} />
        </S.Button>
      </S.Advertisement>
    </S.Container>
  )
}
