import { useCallback, useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AppRoutesNavigatorProps } from '@/routes/app.routes'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { useSearchForm } from '@/contexts/search-form'

import { AdvertisementListDTO } from '@/dtos/advertisement-list-dto'

import { ActiveAdvertisement } from '@/screens/home/components/active-advertisement'
import { UserGreeting } from '@/screens/home/components/user-greeting'
import { FilterAdvertisement } from '@/screens/home/components/filter-advertisement'
import { InputSearch } from '@/screens/home/components/input-search'
import { CardAdvertisement } from './components/card-advertisement'
import { CardSkeleton } from './components/card-skeleton'
import { NoResultFound } from './components/no-result-found'

import * as S from '@/screens/home/styles'
import { SkeletonContainer } from './components/card-skeleton/styles'

export default function Home() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const navigation = useNavigation<AppRoutesNavigatorProps>()
  const {
    searchFormData,
    searchMutation,
    setSearchFormData,
    fetchFilteredProducts,
  } = useSearchForm()

  const {
    data: advertisements,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['advertisements'],
    queryFn: async () => {
      const response = await api.get<AdvertisementListDTO[]>('/products')

      return response.data
    },
  })

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

  return (
    <S.Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <UserGreeting />

        <ActiveAdvertisement />

        <S.Form>
          <S.Title>Compre produtos</S.Title>

          <InputSearch
            placeholder="Buscar anúncio"
            onOpenBottomSheet={handleOpenBottomSheet}
            value={searchFormData.search}
            onChangeText={(value) =>
              setSearchFormData((prevState) => ({
                ...prevState,
                search: value,
              }))
            }
            onSubmitEditing={() => fetchFilteredProducts()}
          />

          <FilterAdvertisement bottomSheetModalRef={bottomSheetModalRef} />
        </S.Form>

        {isLoading || searchMutation.isPending ? (
          <SkeletonContainer>
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
            <CardSkeleton borderRadius={8} width={160} height={143} />
          </SkeletonContainer>
        ) : (
          <S.FlatList
            data={advertisements}
            renderItem={({ item }) => {
              const advertisement = item as unknown as AdvertisementListDTO
              return (
                <CardAdvertisement
                  advertisement={advertisement}
                  navigation={navigation}
                />
              )
            }}
            numColumns={2}
            keyExtractor={(item) => {
              const { id } = item as unknown as AdvertisementListDTO
              return id
            }}
            ListEmptyComponent={() => <NoResultFound />}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </S.Container>
  )
}
