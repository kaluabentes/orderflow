import React from 'react'
import { CommonProps } from '~/components/CommonProps'

import { Container } from './styles'

interface ActionButtonProps extends CommonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'default'
}

function ActionButton({
  onClick,
  children,
  variant = 'default',
  ...commonProps
}: ActionButtonProps) {
  return (
    <Container {...commonProps} onClick={onClick} variant={variant}>
      {children}
    </Container>
  )
}

export default ActionButton
