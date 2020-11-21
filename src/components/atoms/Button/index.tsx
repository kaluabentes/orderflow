import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container, Loader } from './styles'

interface ButtonProps extends CommonProps {
  onClick?: () => void
  isLoading?: boolean
  variant?: 'default' | 'primary' | 'info' | 'warning'
  type?: string
}

function Button({
  onClick,
  variant = 'default',
  isLoading = false,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <Container
      {...props}
      onClick={onClick}
      variant={variant}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : children}
    </Container>
  )
}

export default Button
