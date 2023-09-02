import React, { FC } from 'react'
import { Image, View } from 'react-native'

import { appLogoStyles } from './styles'
import { useAppStore } from '~/store'

interface Props {
  marginTop?: number
  marginBottom?: number
}

export const AppLogo: FC<Props> = ({ marginTop = 5, marginBottom = 5 }) => {
  const { theme } = useAppStore()
  const style = appLogoStyles(theme)
  return (
    <View
      style={[
        style.container,
        { marginTop: `${marginTop}%`, marginBottom: `${marginBottom}%` },
      ]}>
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: './resources/images/app_logo.jpeg',
            cache: 'force-cache',
          }}
          style={style.image}
        />
      </View>
    </View>
  )
}
