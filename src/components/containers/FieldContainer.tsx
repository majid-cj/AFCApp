import React, { FC, ReactElement } from 'react'
import { View } from 'react-native'

import { ErrorText } from '../texts'
import { FieldContainerStyles } from './styles'
import { useAppStore } from '~/store'

interface Props {
  helper?: string
  error?: boolean
  children: ReactElement
}

export const FieldContainer: FC<Props> = ({
  helper,
  error = false,
  children,
}) => {
  const { theme } = useAppStore()
  const styles = FieldContainerStyles(theme, error)
  return (
    <View style={styles.container}>
      <View style={styles.children}>{children}</View>
      {error && <ErrorText label={helper || ''} />}
    </View>
  )
}
