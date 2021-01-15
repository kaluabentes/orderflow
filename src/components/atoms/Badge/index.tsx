import React from 'react'
import { CommonProps } from '~/components/CommonProps'

import { Container } from './styles'

interface BadgeProps extends CommonProps {
  children: React.ReactNode
  isDisabled?: boolean
}

function Badge({ children, isDisabled = false, ...props }: BadgeProps) {
  return (
    <Container isDisabled={isDisabled} {...props}>
      {children}
    </Container>
  )
}

export default Badge
