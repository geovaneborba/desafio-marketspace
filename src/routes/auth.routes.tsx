import SignIn from '@/screens/sign-in'
import SignUp from '@/screens/sign-up'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

type AuthRoutesProps = {
  signIn: undefined
  signUp: undefined
}

export type AuthRoutesNavigatorProps =
  NativeStackNavigationProp<AuthRoutesProps>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}
