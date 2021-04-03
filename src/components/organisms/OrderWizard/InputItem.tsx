import React from 'react'
import Amount from '~/components/atoms/Amount'
import Box from '~/components/atoms/Box'
import Checkbox from '~/components/atoms/Checkbox'
import Paragraph from '~/components/atoms/Paragraph'
import Radio from '~/components/atoms/Radio'
import List from '~/components/molecules/List'
import { InputType } from '~/modules/products/types'
import formatMoney from '~/utils/formatMoney'

interface InputItemProps {
  type: InputType
  label: string
  valueKey: string
  optionValue?: string
  onChange: (value) => void
  isDisabled: boolean
  price: number
}

function InputItem({
  type,
  label,
  price,
  valueKey,
  optionValue,
  onChange,
  isDisabled
}: InputItemProps) {
  function getIsChecked() {
    if (type === 'check') {
      return (
        optionValue &&
        Array.isArray(optionValue) &&
        optionValue.includes(valueKey)
      )
    }

    if (type === 'radio') {
      return optionValue === valueKey
    }

    return undefined
  }

  return (
    <List.Item>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex">
          <Paragraph>{label}</Paragraph>
          {price && (
            <Paragraph weight="600" fontSize="0.8rem">
              + {formatMoney(price)}
            </Paragraph>
          )}
        </Box>
        {type === 'radio' && (
          <Radio
            isChecked={getIsChecked()}
            onChange={() => onChange(valueKey)}
          />
        )}
        {type === 'check' && (
          <Checkbox
            isChecked={getIsChecked()}
            isDisabled={isDisabled}
            onChange={() => onChange(valueKey)}
          />
        )}
        {type === 'amount' && (
          <Amount
            isRightDisabled={isDisabled}
            value={optionValue}
            onChange={val => onChange(val)}
          />
        )}
      </Box>
    </List.Item>
  )
}

export default InputItem
