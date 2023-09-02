import { AppTheme } from '@react-navigation/native'

import LatoBold from '~/resources/fonts'

export const AppDarkTheme: AppTheme = {
  dark: true,
  colors: {
    secondary: '#eff2eb',
    accent: '#ffb703',
    danger: '#e63946',
    success: '#2a9d8f',
    background: '#f6f9f3',
    text: '#d58557',
    lightText: '#b7b7b4',
    darkText: '#272726',
    lightBackground: '#eff2ea',
    branchBackground: '#a1bb10',
    border: '#cc6730',
  },
  space: {
    small: 4,
    medium: 8,
    large: 12,
    xLarge: 16,
  },
  fonts: {
    smallFont: {
      fontSize: 8,
      fontFamily: LatoBold,
    },
    mediumFont: {
      fontSize: 12,
      fontFamily: LatoBold,
    },
    largeFont: {
      fontSize: 16,
      fontFamily: LatoBold,
    },
    xLargeFont: {
      fontSize: 24,
      fontFamily: LatoBold,
    },
  },
}
