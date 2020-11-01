import React from 'react'
import { ComponentProps } from '../../ComponentProps'

import { Container } from './styles'

interface HeadingProps extends ComponentProps {
  as?: string
  size?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
}

function Heading({ as, size = 'medium', ...ComponentProps }: HeadingProps) {
  return <Container {...ComponentProps} as={as} size={size} />
}

export default Heading
