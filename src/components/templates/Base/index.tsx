import React from 'react'

import { ComponentProps } from '../../ComponentProps'
import { Container, Content } from './styles'

interface BaseProps extends ComponentProps {
  hasPadding?: boolean
}

function Base({ children, hasPadding = false }: BaseProps) {
  return (
    <Container>
      <Content hasPadding={hasPadding}>{children}</Content>
    </Container>
  )
}

export default Base
