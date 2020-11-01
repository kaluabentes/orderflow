import React from 'react'
import { ComponentProps } from '../../ComponentProps'

import { Container } from './styles'

interface ButtonProps extends ComponentProps {
  onClick: () => void
  variant?: 'default' | 'primary' | 'info' | 'warning'
}

function Button({
  onClick,
  variant = 'default',
  ...componentProps
}: ButtonProps) {
  return <Container {...componentProps} onClick={onClick} variant={variant} />
}

export default Button
