import React, { FC } from 'react'

import { HomeParamsList } from './types'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '~/screens/home/HomeScreen'

export const HomeNavigationStack: FC = () => {
  const { Navigator, Screen } = createStackNavigator<HomeParamsList>()

  return (
    <Navigator initialRouteName={'HOME'} screenOptions={{ headerShown: false }}>
      <Screen
        name={'HOME'}
        component={HomeScreen}
        options={{
          detachPreviousScreen: true,
        }}
      />
      <Screen
        name={'ORDER'}
        component={HomeScreen}
        options={{
          detachPreviousScreen: true,
        }}
      />
      <Screen
        name={'ORDER_DETAILS'}
        component={HomeScreen}
        options={{
          detachPreviousScreen: true,
        }}
      />
    </Navigator>
  )
}
