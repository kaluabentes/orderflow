import React from 'react'
import { BaseProps } from '../../BaseProps'

import { Container } from './styles'

interface HeadingProps extends BaseProps {
  as?: string
  size:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
}

function Heading({ as, size = 'medium', ...baseProps }: HeadingProps) {
  return <Container {...baseProps} as={as} size={size} />
}

export default Heading
