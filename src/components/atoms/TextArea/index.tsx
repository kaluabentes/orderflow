import React from 'react'

import { Container } from './styles'

interface TextAreaProps {
  children: React.ReactNode
}

function TextArea({ children }: TextAreaProps) {
  return (
    <Container rows={5} cols={5}>
      {children}
    </Container>
  )
}

export default TextArea
