import React from 'react'
import { ComponentProps } from '../../ComponentProps'

import { Container } from './styles'

interface ButtonProps extends ComponentProps {
  onClick: () => void
  variant?: 'default' | 'primary' | 'info' | 'warning'
}

function Button({ onClick, variant = 'default', ...props }: ButtonProps) {
  return <Container {...props} onClick={onClick} variant={variant} />
}

export default Button
