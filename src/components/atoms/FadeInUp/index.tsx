import React from 'react'

import { ComponentProps } from '../../ComponentProps'

import { Container } from './styles'

interface FadeInUpProps extends ComponentProps {
  delay?: string
}

function FadeInUp({ children, delay = '0.5s' }: FadeInUpProps) {
  return <Container delay={delay}>{children}</Container>
}

export default FadeInUp
