import React, { FC, ReactElement, useEffect, useRef, useState } from 'react'
import {
  KeyboardTypeOptions,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native'

import { FieldContainer } from '~/components/containers'

import { inputFieldStyle } from './styles'
import { useAppStore } from '~/store'

interface Props {
  value?: string
  placeholder?: string
  helper?: string
  secure?: boolean
  error?: boolean
  focus?: boolean
  center?: boolean
  keyBoard?: KeyboardTypeOptions
  onTextChange?: (value: string) => void
}

export const FieldInput: FC<Props> = ({
  value,
  placeholder,
  helper,
  focus,
  error,
  keyBoard = 'default',
  secure = false,
  onTextChange,
}) => {
  const [textStyle, setTextStyle] = useState<TextStyle>()
  const inputRef = useRef<TextInput>(null)
  const { theme } = useAppStore()
  const styles = inputFieldStyle(theme)

  useEffect(() => {
    setTextStyle(styles.placeHolder)
  }, [])

  useEffect(() => {
    if (focus === true) {
      inputRef?.current?.focus()
    }

    if (value) {
      setTextStyle(value.length ? styles.text : styles.placeHolder)
    }
  }, [focus, value])

  const handleOnTextChange = (input: string) => {
    onTextChange && onTextChange(input)
  }

  return (
    <FieldContainer helper={helper} error={error}>
      <View style={styles.container}>
        <TextInput
          ref={inputRef}
          value={value}
          secureTextEntry={secure}
          keyboardType={keyBoard}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.branchBackground}
          onChangeText={handleOnTextChange}
          style={textStyle}
          numberOfLines={1}
        />
      </View>
    </FieldContainer>
  )
}
