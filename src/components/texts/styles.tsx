import { I18nManager, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const subTitleStyle = ({ colors, fonts, space }: AppTheme) =>
  StyleSheet.create({
    text: {
      ...fonts.mediumFont,
      textAlign: 'left',
      textAlignVertical: 'center',
      color: colors.accent,
      flexWrap: 'wrap',
      marginBottom: space.small,
    },
  })

export const errorTextStyle = ({ colors, fonts, space }: AppTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: -(space.large + (I18nManager.isRTL ? space.small : space.small)),
      alignSelf: 'flex-start',
      marginStart: space.small,
    },
    containerError: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0,
      alignSelf: 'center',
    },
    text: {
      ...fonts.smallFont,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginStart: space.small,
      color: colors.danger,
    },
  })
