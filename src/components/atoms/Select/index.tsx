import React from 'react'

import { CommonProps } from '~/styles/utils/CommonProps'
import Label from '~/components/atoms/Label'

import { Container, Field } from './styles'
import { renderError } from '../Input'

interface SelectProps extends CommonProps {
  label?: string
  id: string
  value: string
  error?: string | Array<string>
  onChange: (event: any) => void
}

function Select({
  children,
  label,
  id,
  value,
  onChange,
  error,
  ...containerProps
}: SelectProps) {
  return (
    <Container {...containerProps}>
      {label && (
        <Label htmlFor={id} margin="0 0 7px 0">
          {label}
        </Label>
      )}
      <Field
        id={id}
        value={value}
        onChange={onChange}
        hasError={Boolean(error)}
      >
        {children}
      </Field>
      {renderError(error)}
    </Container>
  )
}

export default Select
