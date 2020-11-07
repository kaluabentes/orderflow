import React from 'react'

import { CommonProps } from '../../CommonProps'

import { Container, Dot } from './styles'

function DotLoader(props: CommonProps) {
  return (
    <Container {...props}>
      <Dot />
      <Dot />
      <Dot />
    </Container>
  )
}

export default DotLoader
