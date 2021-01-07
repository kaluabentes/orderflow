import React from 'react'

import { Container } from './styles'

function TextArea({ value }) {
  return (
    <Container rows={5} cols={5}>
      {value}
    </Container>
  )
}

export default TextArea
