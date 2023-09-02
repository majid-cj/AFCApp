import { Dimensions, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

const { width } = Dimensions.get('screen')

export const appButtonStyles = ({ colors, space, fonts }: AppTheme) =>
  StyleSheet.create({
    container: {
      width: width - space.xLarge,
      height: space.xLarge * 2,
      backgroundColor: 'transparent',
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: space.large,
    },
    linearGradient: {
      flex: 1,
      borderRadius: space.medium,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      ...fonts.xLargeFont,
      color: colors.lightText,
    },
  })
