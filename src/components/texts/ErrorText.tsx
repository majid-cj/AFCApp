import React, { FC } from 'react'
import { View } from 'react-native'

import { SubTitle } from './SubTitle'
import { errorTextStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  label: string
  warning?: boolean
}

export const ErrorText: FC<Props> = ({ label, warning = false }) => {
  const { theme } = useAppStore()
  const styles = errorTextStyle(theme)
  return (
    <View style={warning ? styles.containerError : styles.container}>
      <SubTitle text={label} style={styles.text} fontSize={'md'} />
    </View>
  )
}
