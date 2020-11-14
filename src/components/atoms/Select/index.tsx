import React from 'react'

import { CommonProps } from '~/components/CommonProps'
import Label from '~/components/atoms/Label'

import { Container, Field } from './styles'

interface SelectProps extends CommonProps {
  label?: string
  id: string
  value: string
  onChange: (event: any) => void
}

function Select({
  children,
  label,
  id,
  value,
  onChange,
  ...containerProps
}: SelectProps) {
  return (
    <Container {...containerProps}>
      {label && (
        <Label htmlFor={id} margin="0 0 7px 0">
          {label}
        </Label>
      )}
      <Field id={id} value={value} onChange={onChange}>
        {children}
      </Field>
    </Container>
  )
}

export default Select
