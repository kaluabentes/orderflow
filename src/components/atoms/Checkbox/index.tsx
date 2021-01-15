import React from 'react'

import Icon from '~/components/atoms/Icon'
import { Container } from './styles'

interface CheckboxProps {
  isChecked: boolean
  isDisabled: boolean
  onChange: () => void
}

function Checkbox({ isChecked, isDisabled, onChange }: CheckboxProps) {
  return (
    <Container
      onClick={onChange}
      isChecked={isChecked}
      disabled={isDisabled && !isChecked}
    >
      {isChecked && <Icon name="check" />}
    </Container>
  )
}

export default Checkbox
