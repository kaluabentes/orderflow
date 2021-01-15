import React from 'react'

import { Container, Button, ButtonLabel, Count } from './styles'

enum Mode {
  Add = 'add',
  Subtract = 'subtract'
}

interface AmountProps {
  value: number | string
  onChange: (value) => void
  isRightDisabled?: boolean
  isLeftDisabled?: boolean
}

function Amount({
  value,
  isLeftDisabled = false,
  isRightDisabled = false,
  onChange
}: AmountProps) {
  const methods = {
    add: handleAdd,
    subtract: handleSubtract
  }

  function handleChange(mode) {
    onChange(methods[mode]())
  }

  function handleAdd() {
    return Number(value) + 1
  }

  function handleSubtract() {
    const nextValue = Number(value) - 1

    if (nextValue < 0) {
      return 0
    }

    return nextValue
  }

  return (
    <Container>
      <Button
        onClick={() => handleChange(Mode.Subtract)}
        disabled={value === 0 || isLeftDisabled}
      >
        <ButtonLabel>-</ButtonLabel>
      </Button>
      <Count>{value}</Count>
      <Button onClick={() => handleChange(Mode.Add)} disabled={isRightDisabled}>
        <ButtonLabel>+</ButtonLabel>
      </Button>
    </Container>
  )
}

export default Amount
