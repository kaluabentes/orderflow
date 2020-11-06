import React from 'react'

import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface FadeInUpProps extends CommonProps {
  delay?: string
}

function FadeInUp({ children, delay = '0.5s' }: FadeInUpProps) {
  return <Container delay={delay}>{children}</Container>
}

export default FadeInUp
