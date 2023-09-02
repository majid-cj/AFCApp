import { Dimensions, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

export const { width: SCREEN_WIDTH } = Dimensions.get('screen')

export const imageViewStyle = (
  { colors, space }: AppTheme,
  isRound: boolean = false,
  border: boolean = false
) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      borderRadius: isRound ? SCREEN_WIDTH : space.medium,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: border ? 2.5 : 0,
      borderColor: colors.accent,
      overflow: 'hidden',
    },
    image: {
      resizeMode: 'cover',
      aspectRatio: 1,
      flex: 1,
    },
    roundImageCircle: {
      borderTopRightRadius: SCREEN_WIDTH,
      borderTopLeftRadius: SCREEN_WIDTH,
      borderBottomRightRadius: SCREEN_WIDTH,
      borderBottomLeftRadius: SCREEN_WIDTH,
    },
    roundImage: {
      borderTopRightRadius: space.medium,
      borderTopLeftRadius: space.medium,
      borderBottomRightRadius: space.medium,
      borderBottomLeftRadius: space.medium,
    },
  })

export const appLogoStyles = ({ space, colors }: AppTheme) =>
  StyleSheet.create({
    container: {
      width: SCREEN_WIDTH - space.xLarge,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      height: SCREEN_WIDTH / 3,
      width: SCREEN_WIDTH / 3,
      backgroundColor: colors.background,
    },
    image: {
      resizeMode: 'cover',
      aspectRatio: 1,
    },
  })
