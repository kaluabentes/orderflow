import React from 'react'

import Box from '~/components/atoms/Box'
import List from '~/components/molecules/List'
import InputItem from './InputItem'
import OptionHeader from './OptionHeader'
import { Input } from '.'
import { InputType } from '~/modules/products/types'

interface OptionGroupProps {
  id: string
  type: InputType
  title: string
  subtitle: string
  limit?: number
  isRequired: boolean
  inputs: Input[]
  value: any
  onChange: (optionId, value: any) => void
}

function OptionGroup({
  isRequired,
  id,
  type,
  title,
  subtitle,
  limit,
  inputs,
  value,
  onChange
}: OptionGroupProps) {
  function handleChange(inputId, nextValue) {
    if (type === 'check') {
      if (value.includes(nextValue)) {
        onChange(
          id,
          value.filter(valueKey => valueKey !== nextValue)
        )
        return
      }

      onChange(id, [...value, nextValue])
      return
    }

    if (type === 'amount') {
      onChange(id, { ...value, [inputId]: nextValue })
      return
    }

    // radio
    onChange(id, nextValue)
  }

  function getAmount() {
    if (type === 'check') {
      return value.length
    }

    if (type === 'amount') {
      return Object.keys(value).reduce((prev, curr) => prev + value[curr], 0)
    }

    // radio
    return value ? 1 : 0
  }

  function renderInputItem(input) {
    return (
      <InputItem
        price={input.price}
        key={input.id}
        valueKey={input.id}
        label={input.label}
        type={type}
        onChange={value => handleChange(input.id, value)}
        optionValue={type === 'amount' ? value[input.id] : value}
        isDisabled={limit === getAmount()}
      />
    )
  }

  return (
    <Box display="flex" margin="0 0 20px 0">
      <OptionHeader
        margin="0 0 10px 0"
        title={title}
        subtitle={subtitle}
        limit={limit}
        amount={getAmount()}
        isDisabled={limit === getAmount()}
        isRequired={isRequired}
      />
      <List>{inputs.map(renderInputItem)}</List>
    </Box>
  )
}

export default OptionGroup
