import React from 'react'
import { CommonProps } from '../../../styles/utils/CommonProps'

import { Container, Loader } from './styles'

interface ButtonProps extends CommonProps {
  isInline?: boolean
  onClick?: () => void
  isLoading?: boolean
  variant?: 'default' | 'primary' | 'info' | 'warning' | 'defaultDark'
  type?: string
  outlined?: boolean
  isActive?: boolean
}

function Button({
  isActive = false,
  onClick,
  variant = 'default',
  isLoading = false,
  isInline = false,
  children,
  outlined,
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
      outlined={outlined}
      isInline={isInline}
      isActive={isActive}
    >
      {isLoading ? <Loader /> : children}
    </Container>
  )
}

export default Button
