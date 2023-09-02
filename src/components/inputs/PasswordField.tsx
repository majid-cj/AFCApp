import React, { FC, useEffect, useState } from 'react'

import { FIELD_ERROR_CODE } from '~/constants'

import { FieldInput } from './FieldInput'
import { InputFieldProps } from './types'

export const PasswordField: FC<InputFieldProps> = ({
  onValue,
  code = '00000',
}) => {
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const onInputChange = (value: string) => {
    setPassword(value)
    onValue(value)
  }

  useEffect(() => {
    setError(code === FIELD_ERROR_CODE.PASSWORD)
  }, [code])

  return (
    <FieldInput
      value={password}
      error={error}
      secure={true}
      onTextChange={onInputChange}
      placeholder={'password'}
      helper={'password'}
    />
  )
}
