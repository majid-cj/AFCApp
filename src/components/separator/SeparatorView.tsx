import React, { FC } from 'react'
import { View } from 'react-native'

interface Props {
  width?: number
  color?: string
  height?: number
}

export const SeparatorView: FC<Props> = ({
  width = 100,
  color = 'black',
  height = 2,
}) => {
  return (
    <View
      style={{ height: height, width: `${width}%`, backgroundColor: color }}
    />
  )
}
