import React, { FC } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { spinnerStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  size?: number
  marginTop?: number
}

export const Spinner: FC<Props> = ({ size = 64, marginTop = 0 }) => {
  const { theme } = useAppStore()

  const {
    colors: { secondary },
  } = theme

  const styles = spinnerStyle(theme)

  return (
    <View style={[styles.container, { marginTop: `${marginTop}%` }]}>
      <ActivityIndicator size={size} color={secondary} />
    </View>
  )
}
