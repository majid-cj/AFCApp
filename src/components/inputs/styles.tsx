import { I18nManager, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const inputFieldStyle = ({ colors, fonts, space }: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingStart: space.small,
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'row',
    },
    text: {
      ...fonts.mediumFont,
      flex: 1,
      textAlignVertical: 'center',
      backgroundColor: 'transparent',
      marginHorizontal: space.small,
      height: '100%',
      color: colors.darkText,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    placeHolder: {
      ...fonts.smallFont,
      flex: 1,
      textAlignVertical: 'center',
      backgroundColor: 'transparent',
      marginHorizontal: space.small,
      height: '100%',
      color: colors.branchBackground,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
  })
