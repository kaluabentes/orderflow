import React from 'react'

import { CommonProps } from '../../CommonProps'

import { Container, Dot } from './styles'

interface DotLoaderProps extends CommonProps {
  color?: string
}

function DotLoader({ color, ...props }: DotLoaderProps) {
  return (
    <Container {...props}>
      <Dot color={color} />
      <Dot color={color} />
      <Dot color={color} />
    </Container>
  )
}

export default DotLoader
