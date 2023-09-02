import { ReactElement } from 'react'
import { KeyboardTypeOptions } from 'react-native'

export interface InputFieldProps {
  onValue: (value: string) => void
  code?: string
  maxLength?: number
  keyBoard?: KeyboardTypeOptions
}
