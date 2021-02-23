import React from 'react'
import { CommonProps } from '~/components/CommonProps'

import Icon from '../Icon'
import { Container } from './styles'

function ErrorMessage({ children, ...props }: CommonProps) {
  return (
    <Container {...props}>
      <Icon name="error" />
      {children}
    </Container>
  )
}

export default ErrorMessage
