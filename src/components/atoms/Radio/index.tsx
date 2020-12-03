import React from 'react'

import { Input, Container } from './styles'

interface RadioProps {
  isChecked: boolean
  onChange: () => void
}

export default function Radio({ isChecked, onChange }: RadioProps) {
  return (
    <Container isChecked={isChecked}>
      <Input type="radio" checked={isChecked} onChange={onChange} />
    </Container>
  )
}
