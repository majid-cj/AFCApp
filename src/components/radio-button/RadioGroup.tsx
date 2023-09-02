import React, { FC, useState } from 'react'
import { FlatList, View } from 'react-native'

import { SubTitle } from '../texts'
import { Spacer } from '../ui'
import { RadioButton } from './RadioButton'
import { SelectButton } from './SelectButton'
import { radioGroupStyle } from './styles'
import { useAppStore } from '~/store'

type RadioOption = {
  key: number
  label: string
}

interface Props {
  onPress: (...args: any[]) => void
  options: Array<RadioOption>
  title?: string
  centerTitle?: boolean
  Button?: typeof RadioButton | typeof SelectButton
  initial?: number
}

export const RadioGroup: FC<Props> = ({
  options = [],
  title = '',
  onPress,
  initial = 1,
  Button = RadioButton,
}) => {
  const [selected, setSelected] = useState<number | undefined>(initial)
  const { theme } = useAppStore()
  const styles = radioGroupStyle(theme)

  return (
    <View style={styles.container}>
      {title && <SubTitle text={title} />}
      <Spacer size={'md'} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.groupContainer}
        data={options}
        renderItem={({ item, index }) => {
          const { key, label } = item
          return (
            <Button
              key={index}
              title={label}
              selected={key === selected}
              onPress={() => {
                setSelected(key)
                onPress(key)
              }}
            />
          )
        }}
      />
    </View>
  )
}
