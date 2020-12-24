import React from 'react'

import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface IconProps extends CommonProps {
  name: string
}

function Icon({ name, ...commonProps }: IconProps) {
  return <Container {...commonProps}>{name}</Container>
}

export default Icon
