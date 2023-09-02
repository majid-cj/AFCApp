import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { selectButtonStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  onPress: () => void
  title: string
  selected: boolean
  size?: number
}

export const SelectButton: FC<Props> = ({
  onPress,
  title,
  size = 16,
  selected = false,
}) => {
  const { theme } = useAppStore()
  const styles = selectButtonStyle(theme, size, selected)
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
