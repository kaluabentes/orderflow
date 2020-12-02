import React from 'react'

import { Container } from './styles'

interface BadgeProps {
  children: React.ReactNode
}

function Badge({ children }: BadgeProps) {
  return <Container>{children}</Container>
}

export default Badge
