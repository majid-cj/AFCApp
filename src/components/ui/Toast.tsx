import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  Text,
  TouchableOpacity,
} from 'react-native'

import { toastStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  toast: ToastProps
}

export type ToastProps = {
  message: string | undefined
}

export const Toast: FC<Props> = ({ toast: toast }) => {
  const { theme } = useAppStore()
  const { colors } = theme
  const initialState = {
    error: false,
    warning: false,
    success: false,
    message: undefined,
  }

  const [toastValue, setToastValue] = useState<ToastProps>(initialState)
  const IS_LARGE_SCALE = Dimensions.get('screen').scale > 2

  const HEIGHT = IS_LARGE_SCALE ? 64 : 56

  const styles = toastStyle(theme)
  const animationHeight = useRef(new Animated.Value(0)).current
  const animationBottom = useRef(new Animated.Value(0)).current
  const startAnimation = useMemo(
    () => () => {
      Animated.parallel([
        Animated.timing(animationHeight, {
          toValue: HEIGHT,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.bezier(0.42, 0, 1, 1),
        }),
        Animated.timing(animationBottom, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.bezier(0.42, 0, 1, 1),
        }),
      ]).start()
    },
    [animationHeight]
  )

  const closeAnimation = useMemo(
    () => () => {
      Animated.parallel([
        Animated.timing(animationHeight, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: false,
          easing: Easing.bezier(0, 0, 0.58, 1),
        }),
        Animated.timing(animationBottom, {
          toValue: -48,
          duration: 2500,
          useNativeDriver: false,
          easing: Easing.bezier(0, 0, 0.58, 1),
        }),
      ]).start()
    },
    [animationHeight]
  )

  useEffect(() => {
    if (toast.message) {
      setToastValue(toast)
      startAnimation()
    }
  }, [toast])

  const { message } = toastValue

  if (message === undefined) {
    return null
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: animationHeight,
          bottom: animationBottom,
        },
        { backgroundColor: colors.danger },
      ]}>
      <TouchableOpacity
        style={[
          styles.subContainer,
          {
            paddingTop: IS_LARGE_SCALE ? 4 : 0,
          },
        ]}
        activeOpacity={1}
        onPress={closeAnimation}>
        <Text style={styles.message}>{message}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}
