import React from 'react'

import { CommonProps } from '../../CommonProps'
import Label from '../Label'
import ErrorMessage from '../ErrorMessage'

import { Container, Field } from './styles'

export interface InputProps extends CommonProps {
  inputRef?: object
  label?: string
  placeholder?: string
  onChange: (event: any) => void
  onKeyPress?: (event: any) => void
  onPaste?: (event: any) => void
  value: string
  name: string
  type?: string
  error?: string
  maxLength?: string
}

function Input({
  inputRef,
  label,
  name,
  error,
  maxLength,
  placeholder,
  onChange,
  onKeyPress,
  onPaste,
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
        ref={inputRef}
        id={name}
        hasError={Boolean(error)}
        name={name}
        maxLength={maxLength}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onPaste={onPaste}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input
