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
}

function Heading({ as = 'h1', fontSize = 'medium', ...props }: HeadingProps) {
  return <Container {...props} as={as} fontSize={fontSize} />
}

export default Heading
