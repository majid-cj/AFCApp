import React, { FC, useEffect } from 'react'
import { FlatList, View } from 'react-native'

import { Screen } from '~/components/containers'
import { useAppStore } from '~/store'

export const HomeScreen: FC = () => {
  const { getProducts,  products } = useAppStore()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Screen padding>
      <FlatList
        data={products}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => {
          return <View />
        }}
      />
    </Screen>
  )
}
