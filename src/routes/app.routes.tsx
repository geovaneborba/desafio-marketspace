import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'
import { House, SignOut as SignOutIcon, Tag } from 'phosphor-react-native'

import { RouteProp } from '@react-navigation/native'

import AdvertisementDetails from '@/screens/advertisement-details'
import Home from '@/screens/home'
import MyAdvertisements from '@/screens/my-advertisements'
import MyAdvertisementDetails from '@/screens/my-advertisement-details'

import PreviewAdvertisement from '@/screens/preview-advertisement'
import { SignOut } from '@/screens/sign-out'
import AdvertisementForm from '@/screens/advertisement-form'

type PreviewAdParams = {
  id?: string
  productImagesToRemove?: string[]
  productImages: {
    id?: string
    name: string
    type: string
    uri: string
  }[]
  name: string
  description: string
  isNew: boolean
  price: number
  acceptTrade: boolean
  paymentMethods: {
    key: string
    name: string
  }[]
  action: 'create' | 'edit'
}

type AppRoutesProps = {
  home: undefined
  advertisementDetails: { id: string }
  myAdvertisementDetails: { id: string }
  myAdvertisements: undefined
  advertisementForm: {
    id?: string
    mode: 'create' | 'edit'
    keepPreviousData?: boolean
  }
  previewAdvertisement: PreviewAdParams
  signOut: undefined
}

export type AppRoutesNavigatorProps = BottomTabNavigationProp<AppRoutesProps>

export type RouteProps = {
  PreviewAdvertisement: RouteProp<AppRoutesProps, 'previewAdvertisement'>
  MyAdvertisementDetails: RouteProp<AppRoutesProps, 'myAdvertisementDetails'>
  AdvertisementDetails: RouteProp<AppRoutesProps, 'advertisementDetails'>
  AdvertisementForm: RouteProp<AppRoutesProps, 'advertisementForm'>
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors['gray-2'],
        tabBarInactiveTintColor: theme.colors['gray-4'],
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House size={24} color={color} />,
        }}
      />

      <Screen
        name="advertisementDetails"
        component={AdvertisementDetails}
        options={{ tabBarButton: () => null, tabBarStyle: { display: 'none' } }}
      />

      <Screen
        name="myAdvertisements"
        component={MyAdvertisements}
        options={{
          tabBarIcon: ({ color }) => <Tag size={24} color={color} />,
          tabBarActiveTintColor: theme.colors['gray-2'],
        }}
      />

      <Screen
        name="myAdvertisementDetails"
        component={MyAdvertisementDetails}
        options={{ tabBarButton: () => null, tabBarStyle: { display: 'none' } }}
      />

      <Screen
        name="advertisementForm"
        component={AdvertisementForm}
        options={{ tabBarButton: () => null, tabBarStyle: { display: 'none' } }}
      />

      <Screen
        name="previewAdvertisement"
        component={PreviewAdvertisement}
        options={{ tabBarButton: () => null, tabBarStyle: { display: 'none' } }}
      />

      <Screen
        name="signOut"
        component={SignOut}
        options={{
          tabBarIcon: () => (
            <SignOutIcon color={theme.colors['red-light']} size={24} />
          ),
        }}
      />
    </Navigator>
  )
}
