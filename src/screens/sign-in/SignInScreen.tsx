import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'

import { AppButton } from '~/components/buttons'
import { Screen } from '~/components/containers'
import { EmailField, PasswordField } from '~/components/inputs'
import { Spacer, ToastProps } from '~/components/ui'
import { FIELD_ERROR_CODE } from '~/constants'
import { AuthNavigation } from '~/navigations'
import { useAppStore } from '~/store'

export const SignInScreen: FC = () => {
  const [emailCode, setEmailCode] = useState<string>('0000')
  const [passwordCode, setPasswordCode] = useState<string>('0000')
  const [auth] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  })
  const [toast, setToast] = useState<ToastProps>({ message: undefined })
  const {
    theme: {
      colors: { secondary },
    },
    login,
    authError,
  } = useAppStore()
  const { navigate } = useNavigation<AuthNavigation>()

  useEffect(() => {
    if (authError !== undefined) {
      setToast({ message: authError.message })
    }
  }, [authError])

  const onEmail = (email: string) => {
    auth.email = email
  }

  const onPassword = (password: string) => {
    auth.password = password
  }

  const onSignIn = () => {
    try {
      login(auth.email, auth.password)
    } catch (error: any) {
      if (Array.isArray(error)) {
        error.map((item: string) => {
          if (item === FIELD_ERROR_CODE.EMAIL) {
            setEmailCode(item)
          }

          if (item === FIELD_ERROR_CODE.PASSWORD) {
            setPasswordCode(item)
          }
        })
      } else {
        const toastSignIn = { error: true, message: error.message }
        setToast(toastSignIn)
      }
    }
  }

  const goToSignUp = () => {
    navigate('SIGN_UP')
  }

  return (
    <Screen scroll padding toast={toast}>
      <EmailField onValue={onEmail} code={emailCode} />
      <Spacer size={'xxl'} />
      <PasswordField onValue={onPassword} code={passwordCode} />
      <Spacer size={'xxl'} />
      <AppButton text={'sign in'} onPress={onSignIn} />
      <Spacer size={'xxl'} />
      <AppButton
        text={'join us'}
        onPress={goToSignUp}
        colors={[secondary, secondary]}
      />
    </Screen>
  )
}
