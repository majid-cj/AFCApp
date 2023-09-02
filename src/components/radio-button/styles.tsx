import { StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const radioGroupStyle = ({ colors }: AppTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      marginVertical: 4,
      width: '90%',
      backgroundColor: colors.background,
    },
    groupContainer: {
      width: '100%',
    },
  })

export const radioButtonStyle = (
  { colors, fonts, space }: AppTheme,
  size: number
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      height: space.xLarge,
      marginEnd: space.large,
    },
    otter: {
      width: size,
      height: size,
      borderWidth: space.small,
      borderColor: colors.accent,
      borderRadius: size / space.small,
      justifyContent: 'center',
      alignItems: 'center',
      marginEnd: space.small,
    },
    inner: {
      width: size - space.medium,
      height: size - space.medium,
      borderWidth: space.small,
      borderColor: colors.accent,
      borderRadius: (size - 6) / 2,
    },
    text: {
      ...fonts.smallFont,
      textAlign: 'left',
      textAlignVertical: 'center',
      color: colors.accent,
    },
  })

export const selectButtonStyle = (
  { colors, fonts }: AppTheme,
  size: number = 16,
  selected: boolean
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: selected ? colors.accent : colors.background,
      margin: 8,
      padding: 8,
      borderRadius: 16,
      justifyContent: 'center',
    },
    text: {
      ...fonts.smallFont,
      fontsSize: size,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: selected ? colors.background : colors.accent,
    },
  })
