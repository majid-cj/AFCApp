import React, { FC } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native'

import { SeparatorView } from '../separator'
import { subTitleStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  text: string
  onClick?: () => void
  style?: StyleProp<TextStyle>
  fontSize?: number
  underLine?: boolean
  overLine?: boolean
}

export const SubTitle: FC<Props> = ({
  text,
  style,
  fontSize,
  underLine = false,
  overLine = false,
  onClick,
}) => {
  const { theme } = useAppStore()
  const styles = subTitleStyle(theme)

  const color = style ? style['color'] : theme.colors.accent

  return (
    <>
      {overLine && <SeparatorView width={75} height={0.7} color={color} />}
      <TouchableOpacity style={style} onPress={onClick} activeOpacity={1}>
        <Text
          style={StyleSheet.flatten([
            styles.text,
            fontSize ? { fontSize } : {},
            style,
          ])}
          numberOfLines={1}>
          {text}
        </Text>
      </TouchableOpacity>
      {underLine && <SeparatorView width={75} height={0.7} color={color} />}
    </>
  )
}
