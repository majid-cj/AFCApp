import React, { FC, useEffect, useState } from 'react'

import { FIELD_ERROR_CODE } from '~/constants'

import { FieldInput } from './FieldInput'
import { InputFieldProps } from './types'

export const EmailField: FC<InputFieldProps> = ({
  code = '00000',
  onValue,
}) => {
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const onInputChange = (value: string) => {
    const emailValue = value.toLocaleLowerCase()
    setEmail(emailValue)
    onValue(emailValue.toLocaleLowerCase())
  }

  useEffect(() => {
    setError(code === FIELD_ERROR_CODE.EMAIL)
  }, [code])

  return (
    <FieldInput
      value={email}
      error={error}
      onTextChange={onInputChange}
      keyBoard={'email-address'}
      placeholder={'email'}
      helper={'email'}
    />
  )
}
