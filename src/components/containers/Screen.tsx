import React, { FC, ReactElement } from 'react'
import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Spinner, Toast, ToastProps } from '../ui'
import { screenStyles } from './styles'
import { useAppStore } from '~/store'

type Props = {
  footer?: ReactElement
  header?: ReactElement
  scroll?: boolean
  padding?: boolean
  loading?: boolean
  onRefresh?: () => void
  toast?: ToastProps
  children: undefined | ReactElement | ReactElement[]
}

export const Screen: FC<Props> = ({
  header,
  footer,
  scroll,
  padding,
  loading,
  onRefresh,
  toast,
  children,
}) => {
  const { theme } = useAppStore()
  const styles = screenStyles(theme)
  const ChildrenView = scroll ? ScrollView : View
  const viewProps = scroll
    ? {
        showsVerticalScrollIndicator: false,
        style: [styles.containerScrollable, padding && styles.paddingContainer],
      }
    : {
        style: [styles.container, padding && styles.paddingContainer],
      }
  const footerProps = scroll
    ? { style: styles.footerContainerScrollable }
    : { style: styles.footerContainer }
  const refreshControl = onRefresh
    ? {
        refreshControl: (
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        ),
      }
    : {}
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'default'} />
      <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={'padding'}>
        {header && <View style={styles.headerContainer}>{header}</View>}
        <ChildrenView {...viewProps} {...refreshControl}>
          {children}
        </ChildrenView>
        {footer && <View {...footerProps}>{footer}</View>}
        {loading && <Spinner />}
        {toast && <Toast toast={toast} />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
