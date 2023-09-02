import React, { FC, useEffect, useState } from 'react'

import { FIELD_ERROR_CODE } from '~/constants'

import { FieldInput } from './FieldInput'
import { InputFieldProps } from './types'

export const UsernameField: FC<InputFieldProps> = ({
  code = '00000',
  onValue,
}) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const onInputChange = (value: string) => {
    setName(value)
    onValue(value)
  }

  useEffect(() => {
    setError(code === FIELD_ERROR_CODE.USERNAME)
  }, [code])

  return (
    <FieldInput
      value={name}
      error={error}
      onTextChange={onInputChange}
      placeholder={'username'}
      helper={'username'}
    />
  )
}
