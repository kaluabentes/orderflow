import React from 'react'
import { BaseProps } from '../../BaseProps'

import { Container } from './styles'

interface ButtonProps extends BaseProps {
  onClick: () => void
  variant?: 'default' | 'primary' | 'info' | 'warning'
}

function Button({ onClick, variant = 'default', ...baseProps }: ButtonProps) {
  return <Container {...baseProps} onClick={onClick} variant={variant} />
}

export default Button
