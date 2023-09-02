import React, { FC, ReactElement } from 'react'
import { View } from 'react-native'

import { ErrorText } from '../texts'
import { TextAreaContainerStyles } from './styles'
import { useAppStore } from '~/store'

interface Props {
  helper?: string
  error: boolean
  children: ReactElement
}

export const TextAreaContainer: FC<Props> = ({ error, helper, children }) => {
  const { theme } = useAppStore()
  const styles = TextAreaContainerStyles(theme, error)

  return (
    <View style={styles.container}>
      <View style={styles.children}>{children}</View>
      {error && <ErrorText label={helper || ''} />}
    </View>
  )
}
