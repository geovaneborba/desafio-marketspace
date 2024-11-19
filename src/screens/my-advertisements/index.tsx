import { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AdvertisementCard } from '@/screens/my-advertisements/components/advertisement-card'
import { CardSkeleton } from './components/card-skeleton'
import { Header } from './components/header'
import { FilterByStatus } from './components/filter-by-status'

import * as S from '@/screens/my-advertisements/styles'
import { SkeletonContainer } from './components/card-skeleton/styles'

import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { UserAdvertisementListDTO } from '@/dtos/user-advertisement-list-dto'

import { api } from '@/lib/axios'

const filterMyAdvertisementFormSchema = z.object({
  status: z.enum(['all', 'active', 'disabled']),
})

export type FilterMyAdvertisementFormData = z.infer<
  typeof filterMyAdvertisementFormSchema
>

export default function MyAdvertisements() {
  const navigation = useNavigation<AppRoutesNavigatorProps>()

  const { control, watch } = useForm<FilterMyAdvertisementFormData>({
    resolver: zodResolver(filterMyAdvertisementFormSchema),
    defaultValues: {
      status: 'all',
    },
  })

  const status = watch('status')

  const {
    data: myAdvertisements,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['my-advertisements', status],
    queryFn: async () => {
      const response =
        await api.get<UserAdvertisementListDTO[]>('/users/products')

      const products = response.data

      switch (status) {
        case 'all':
          return products
        case 'active':
          return products.filter(
            (advertisement) => advertisement.is_active === true,
          )
        case 'disabled':
          return products.filter(
            (advertisement) => advertisement.is_active === false,
          )
        default:
          return products
      }
    },
  })

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

  return (
    <S.Container>
      <ScrollView>
        <Header />

        <S.Filter>
          <S.TotalAds>{myAdvertisements?.length} anúncios</S.TotalAds>
          <FilterByStatus control={control} />
        </S.Filter>

        {isLoading ? (
          <SkeletonContainer>
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
          </SkeletonContainer>
        ) : (
          <S.FlatList
            data={myAdvertisements}
            renderItem={({ item }) => {
              const advertisement = item as unknown as UserAdvertisementListDTO

              return (
                <AdvertisementCard
                  advertisement={advertisement}
                  navigation={navigation}
                />
              )
            }}
            numColumns={2}
            keyExtractor={(item) => {
              const { id } = item as unknown as UserAdvertisementListDTO

              return id
            }}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </S.Container>
  )
}
