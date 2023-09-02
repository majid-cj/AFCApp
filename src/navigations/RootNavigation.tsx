import 'react-native-gesture-handler'
import React, { FC, useLayoutEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AppParamsList } from './types'
import { useAppStore } from '~/store'
import { HomeNavigationStack } from './HomeNavigation'
import { AuthenticationNavigationStack } from './AuthenticationNavigation'
import { setupNetwork } from '~/services/network'

export const RootNavigationStack: FC = () => {
  const { Navigator, Screen } = createStackNavigator<AppParamsList>()
  const { isAuthorized } = useAppStore()

  useLayoutEffect(() => {
    ;(async () => {
      await setupNetwork()
    })()
  }, [])

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={'UN_AUTH'}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        {isAuthorized ? (
          <Screen name={'AUTH'} component={HomeNavigationStack} />
        ) : (
          <Screen name={'UN_AUTH'} component={AuthenticationNavigationStack} />
        )}
      </Navigator>
    </NavigationContainer>
  )
}
