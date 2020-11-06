import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface HeadingProps extends CommonProps {
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

function Heading({ as, size = 'medium', ...props }: HeadingProps) {
  return <Container {...props} as={as} size={size} />
}

export default Heading
