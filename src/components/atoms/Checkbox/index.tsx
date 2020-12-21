import React from 'react'

import Icon from '~/components/atoms/Icon'
import { Container } from './styles'

interface CheckboxProps {
  isChecked: boolean
  onChange: (value) => void
}

function Checkbox({ isChecked, onChange }: CheckboxProps) {
  return (
    <Container onClick={onChange} isChecked={isChecked}>
      {isChecked && <Icon name="check" />}
    </Container>
  )
}

export default Checkbox
