import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface HeadingProps extends CommonProps {
  as?: string
  fontSize?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
  fontWeight?: string
}

function Heading({
  as = 'h1',
  fontSize = 'medium',
  fontWeight = '600',
  ...props
}: HeadingProps) {
  return (
    <Container {...props} as={as} fontWeight={fontWeight} fontSize={fontSize} />
  )
}

export default Heading
