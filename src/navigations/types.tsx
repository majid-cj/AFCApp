import { StackNavigationProp } from '@react-navigation/stack'

export type AppParamsList = {
  UN_AUTH: undefined
  AUTH: undefined
}

export type AuthParamsList = {
  SIGN_IN: undefined
  SIGN_UP: undefined
}

export type HomeParamsList = {
  HOME: undefined
  ORDER: undefined
  ORDER_DETAILS: { id: number }
}

export type AppNavigation = StackNavigationProp<AppParamsList>

export type AuthNavigation = StackNavigationProp<AuthParamsList>

export type HomeNavigation = StackNavigationProp<HomeParamsList>
