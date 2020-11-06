import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface ButtonProps extends CommonProps {
  onClick: () => void
  variant?: 'default' | 'primary' | 'info' | 'warning'
}

function Button({ onClick, variant = 'default', ...props }: ButtonProps) {
  return (
    <Container {...props} onClick={onClick} variant={variant} type="button" />
  )
}

export default Button
