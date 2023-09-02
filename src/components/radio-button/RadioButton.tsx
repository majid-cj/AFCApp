import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { radioButtonStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  onPress: () => void
  title: string
  selected: boolean
  size?: number
}

export const RadioButton: FC<Props> = ({
  onPress,
  title,
  size = 16,
  selected = false,
}) => {
  const { theme } = useAppStore()
  const styles = radioButtonStyle(theme, size)
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.otter}>
        {selected && <View style={styles.inner} />}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
