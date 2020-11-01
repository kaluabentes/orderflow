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
  ...ComponentProps
}: ButtonProps) {
  return <Container {...ComponentProps} onClick={onClick} variant={variant} />
}

export default Button
