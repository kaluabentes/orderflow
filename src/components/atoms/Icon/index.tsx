import React from 'react'

import { ComponentProps } from '../../ComponentProps'

import { Container } from './styles'

interface IconProps extends ComponentProps {
  name: string
}

function Icon({ name }: IconProps) {
  return <Container>{name}</Container>
}

export default Icon
