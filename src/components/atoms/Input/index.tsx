import React from 'react'

import { ComponentProps } from '../../ComponentProps'
import Label from '../Label'

import { Container, Field, ErrorMessage } from './styles'

interface InputProps extends ComponentProps {
  label?: string
  placeholder?: string
  onChange: (event: any) => void
  value: string
  name: string
  type: string
  error?: string
}

function Input({ label, name, error, ...props }: InputProps) {
  return (
    <Container>
      {label && (
        <Label htmlFor={name} margin="0 0 7px 0">
          {label}
        </Label>
      )}
      <Field name={name} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input
