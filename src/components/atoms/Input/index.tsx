import React from 'react'

import { ComponentProps } from '../../ComponentProps'
import Label from '../Label'
import ErrorMessage from '../ErrorMessage'

import { Container, Field } from './styles'

interface InputProps extends ComponentProps {
  label?: string
  placeholder?: string
  onChange: (event: any) => void
  value: string
  name: string
  type?: string
  error?: string
  maxLength?: string
}

function Input({
  label,
  name,
  error,
  maxLength,
  placeholder,
  onChange,
  value,
  type,
  ...props
}: InputProps) {
  return (
    <Container {...props}>
      {label && (
        <Label htmlFor={name} margin="0 0 7px 0">
          {label}
        </Label>
      )}
      <Field
        hasError={Boolean(error)}
        name={name}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input