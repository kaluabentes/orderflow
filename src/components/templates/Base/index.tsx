import React from 'react'

import { CommonProps } from '../../../styles/utils/CommonProps'
import { Container, Content } from './styles'

interface BaseProps extends CommonProps {
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
