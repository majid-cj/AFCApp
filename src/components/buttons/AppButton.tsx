import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { appButtonStyles } from './styles'
import { useAppStore } from '~/store'

interface Props {
  onPress: () => void
  text: string
  colors?: Array<string>
}

export const AppButton: FC<Props> = ({ onPress, text, colors }) => {
  const { theme } = useAppStore()
  const gradientColor = colors || [theme.colors.accent, theme.colors.accent]
  const styles = appButtonStyles(theme)

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.95}
      style={styles.container}>
      <LinearGradient
        colors={gradientColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}>
        <Text style={styles.textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
