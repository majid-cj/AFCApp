

import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { RootNavigationStack } from '~/navigations'


const App: FC = () => {
  return (
    <SafeAreaProvider>
      <RootNavigationStack />
    </SafeAreaProvider>
  )
}

export default App
