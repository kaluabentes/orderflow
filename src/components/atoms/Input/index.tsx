import React from 'react'

import { CommonProps } from '../../CommonProps'
import Label from '../Label'
import ErrorMessage from '../ErrorMessage'

import { Container, Field } from './styles'

export interface InputProps extends CommonProps {
  inputRef?: object
  label?: string
  placeholder?: string
  value: string
  name?: string
  id: string
  type?: string
  error?: string | Array<string>
  maxLength?: string
  onChange: (event: any) => void
  onKeyPress?: (event: any) => void
  onPaste?: (event: any) => void
}

export function renderError(error) {
  if (!error) {
    return null
  }

  if (Array.isArray(error)) {
    return error.map(err => <ErrorMessage>{err}</ErrorMessage>)
  }

  return <ErrorMessage>{error}</ErrorMessage>
}

function Input({
  inputRef,
  label,
  id,
  name,
  error,
  maxLength,
  placeholder,
  value,
  type,
  onChange,
  onKeyPress,
  onPaste,
  ...props
}: InputProps) {
  return (
    <Container {...props}>
      {label && (
        <Label htmlFor={id} margin="0 0 7px 0">
          {label}
        </Label>
      )}
      <Field
        ref={inputRef}
        id={id}
        hasError={Boolean(error)}
        name={name}
        maxLength={maxLength}
        onChange={onChange}
        onKeyPress={evt => console.log(evt)}
        onPaste={onPaste}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {renderError(error)}
    </Container>
  )
}

export default Input
