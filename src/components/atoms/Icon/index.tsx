import React from 'react'

import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface IconProps extends CommonProps {
  name: string
}

function Icon({ name }: IconProps) {
  return <Container>{name}</Container>
}

export default Icon
