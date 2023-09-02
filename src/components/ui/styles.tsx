import { Dimensions, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

const { width } = Dimensions.get('screen')

export const toastStyle = ({ colors, fonts, space }: AppTheme) =>
  StyleSheet.create({
    container: {
      width,
      position: 'absolute',
      opacity: 0.8,
      backgroundColor: colors.accent,
      paddingVertical: space.small,
    },
    subContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    message: {
      ...fonts.smallFont,
      flex: 1,
      color: colors.lightBackground,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  })

export const spinnerStyle = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
export const spacerStyle = (
  { colors, space }: AppTheme,
  height: number = space.small,
  visible: boolean = false
) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: visible ? colors.accent : 'transparent',
      height: height,
    },
  })
