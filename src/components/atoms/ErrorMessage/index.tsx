import React from 'react'
import { CommonProps } from '~/styles/utils/CommonProps'

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
