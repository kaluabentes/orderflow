import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface HeadingProps extends CommonProps {
  variant?: string
  size?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
}

function Heading({ variant, size = 'medium', ...props }: HeadingProps) {
  return <Container {...props} as={variant} size={size} />
}

export default Heading
