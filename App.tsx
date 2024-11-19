import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import Toast from 'react-native-toast-message'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

import { theme } from '@/styles/theme'

import { Loading } from '@/components/loading'

import { Routes } from '@/routes'

import { queryClient } from '@/lib/react-query'
import { AuthContextProvider } from '@/contexts/auth-context'
import { SearchFormProvider } from '@/contexts/search-form'
import { AdvertisementFormProvider } from '@/contexts/advertisement-form'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('@/assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('@/assets/fonts/Karla-Bold.ttf'),
  })

  const paperTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      ...theme.colors,
    },
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView>
          <AuthContextProvider>
            <SearchFormProvider>
              <AdvertisementFormProvider>
                <BottomSheetModalProvider>
                  <PaperProvider theme={paperTheme}>
                    <StatusBar style="dark" />
                    {fontsLoaded ? <Routes /> : <Loading />}
                    <Toast />
                  </PaperProvider>
                </BottomSheetModalProvider>
              </AdvertisementFormProvider>
            </SearchFormProvider>
          </AuthContextProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
