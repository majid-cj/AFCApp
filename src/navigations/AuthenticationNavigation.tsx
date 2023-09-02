import React, { FC } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { SignInScreen } from '~/screens/sign-in/SignInScreen'
import { SignUpScreen } from '~/screens/sign-up/SignUpScreen'

import { AuthParamsList } from './types'

export const AuthenticationNavigationStack: FC = () => {
  const { Navigator, Screen } = createStackNavigator<AuthParamsList>()

  return (
    <Navigator
      initialRouteName={'SIGN_IN'}
      screenOptions={{ animationEnabled: true, headerShown: false }}>
      <Screen name={'SIGN_IN'} component={SignInScreen} />

      <Screen name={'SIGN_UP'} component={SignUpScreen} />
    </Navigator>
  )
}
