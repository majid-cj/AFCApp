import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'

import { AppButton } from '~/components/buttons'
import { Screen } from '~/components/containers'
import { EmailField, PasswordField, UsernameField } from '~/components/inputs'
import { Spacer, ToastProps } from '~/components/ui'
import { FIELD_ERROR_CODE } from '~/constants'
import { AuthNavigation } from '~/navigations'
import { useAppStore } from '~/store'

export const SignUpScreen: FC = () => {
  const [nameCode, setNameCode] = useState<string>('0000')
  const [emailCode, setEmailCode] = useState<string>('0000')
  const [passwordCode, setPasswordCode] = useState<string>('0000')
  const [auth] = useState<{ name: string; email: string; password: string }>({
    name: '',
    email: '',
    password: '',
  })
  const [toast, setToast] = useState<ToastProps>({ message: undefined })
  const {
    theme: {
      colors: { accent },
    },
    signUp,
    authError,
  } = useAppStore()
  const { navigate } = useNavigation<AuthNavigation>()

  useEffect(() => {
    if (authError !== undefined) {
      setToast({ message: authError.message })
    }
  }, [authError])

  const onDisplayName = (display_name: string) => {
    auth.name = display_name
  }

  const onEmail = (email: string) => {
    auth.email = email
  }

  const onPassword = (password: string) => {
    auth.password = password
  }

  const onSignUp = async () => {
    try {
      await signUp(auth.name, auth.email, auth.password)
      goToSignIn()
    } catch (error: any) {
      if (Array.isArray(error)) {
        error.map((item: string) => {
          if (item === FIELD_ERROR_CODE.DISPLAY_NAME) {
            setNameCode(item)
          }

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

  const goToSignIn = () => {
    navigate('SIGN_IN')
  }

  return (
    <Screen scroll padding toast={toast}>
      <UsernameField onValue={onDisplayName} code={nameCode} />
      <Spacer size={'xxl'} />
      <EmailField onValue={onEmail} code={emailCode} />
      <Spacer size={'xxl'} />
      <PasswordField onValue={onPassword} code={passwordCode} />
      <Spacer size={'xxl'} />
      <AppButton text={'join'} onPress={onSignUp} />
      <Spacer size={'xxl'} />
      <AppButton
        text={'return to sign in'}
        onPress={goToSignIn}
        colors={[accent, accent]}
      />
    </Screen>
  )
}
