import React, { FC } from 'react'
import { Image, View } from 'react-native'

import { imageViewStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  uri?: string
  isRound?: boolean
  border?: boolean
  width?: number | string
  height?: number | string
}

export const ImageView: FC<Props> = ({
  uri,
  isRound = false,
  border = false,
  width = '100%',
  height = '100%',
}) => {
  const { theme } = useAppStore()
  const styles = imageViewStyle(theme, isRound, border)

  return (
    <View style={[styles.container, { width, height }]}>
      <Image
        style={[
          styles.image,
          isRound ? styles.roundImageCircle : styles.roundImage,
        ]}
        source={{ uri: uri }}
      />
    </View>
  )
}
