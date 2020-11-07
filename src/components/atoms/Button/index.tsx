import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container, Loader } from './styles'

interface ButtonProps extends CommonProps {
  onClick: () => void
  isLoading?: boolean
  variant?: 'default' | 'primary' | 'info' | 'warning'
}

function Button({
  onClick,
  variant = 'default',
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <Container {...props} onClick={onClick} variant={variant} type="button">
      {isLoading ? <Loader /> : children}
    </Container>
  )
}

export default Button
