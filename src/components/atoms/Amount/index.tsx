import React from 'react'

import { Container, Button, ButtonLabel, Count } from './styles'

enum Mode {
  Add = 'add',
  Subtract = 'subtract'
}

interface AmountProps {
  value: number
  onChange: (value) => void
  isDisabled?: boolean
}

function Amount({ value, isDisabled = false, onChange }: AmountProps) {
  const methods = {
    add: handleAdd,
    subtract: handleSubtract
  }

  function handleChange(mode) {
    onChange(methods[mode]())
  }

  function handleAdd() {
    return value + 1
  }

  function handleSubtract() {
    const nextValue = value - 1

    if (nextValue < 0) {
      return 0
    }

    return nextValue
  }

  return (
    <Container>
      <Button
        onClick={() => handleChange(Mode.Subtract)}
        disabled={value === 0}
      >
        <ButtonLabel>-</ButtonLabel>
      </Button>
      <Count>{value}</Count>
      <Button onClick={() => handleChange(Mode.Add)} disabled={isDisabled}>
        <ButtonLabel>+</ButtonLabel>
      </Button>
    </Container>
  )
}

export default Amount
