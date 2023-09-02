import { Dimensions, StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

const { width, height, scale } = Dimensions.get('screen')

export const screenStyles = ({ colors, space }: AppTheme) =>
  StyleSheet.create({
    keyboardAvoid: {
      width,
      height,
      backgroundColor: colors.background,
    },
    safeArea: {
      width,
      height,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      width,
      height,
    },
    containerScrollable: {
      backgroundColor: colors.background,
      width,
      height,
    },
    headerContainer: {
      flex: 0,
      backgroundColor: colors.background,
    },
    paddingContainer: {
      marginHorizontal: space.lg,
    },
    footerContainer: {
      flex: 0,
      paddingHorizontal: space.lg,
      paddingBottom: space.xl,
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    footerContainerScrollable: {
      paddingHorizontal: space.lg,
      paddingBottom: scale > 2 ? space.xl * 2 : space.xs,
      position: 'absolute',
      bottom: space.xl,
      left: 0,
      right: 0,
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  })

export const FieldContainerStyles = (
  { colors, space }: AppTheme,
  error: boolean
) =>
  StyleSheet.create({
    container: {
      height: space.xl * 2,
      backgroundColor: colors.light,
      borderRadius: space.md,
      justifyContent: 'center',
      alignContent: 'center',
      width: width - space.xxl,
      marginTop: space.xs,
      flex: 1,
      borderWidth: 0.25,
      borderColor: error ? colors.danger : 'transparent',
    },
    children: {
      flex: 1,
    },
  })

export const TextAreaContainerStyles = (
  { colors, space }: AppTheme,
  error: boolean
) =>
  StyleSheet.create({
    container: {
      height: 200,
      backgroundColor: colors.light,
      borderRadius: space.md,
      justifyContent: 'center',
      alignContent: 'center',
      width: '90%',
      borderWidth: 0.25,
      marginTop: space.xs,
      marginBottom: space.md,
      borderColor: error ? colors.danger : 'transparent',
      padding: space.xs,
    },
    children: {
      flex: 1,
    },
  })
