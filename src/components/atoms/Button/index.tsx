import React from 'react'

import { Container } from './styles'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'default' | 'primary' | 'info' | 'warning'
}

export default function Button({
  children,
  onClick,
  variant = 'default'
}: ButtonProps) {
  return (
    <Container onClick={onClick} variant={variant}>
      {children}
    </Container>
  )
}
