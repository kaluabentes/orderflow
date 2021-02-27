import React from 'react'
import { CommonProps } from '../../../styles/utils/CommonProps'

import { Container } from './styles'

interface HeadingProps extends CommonProps {
  as?: string
}

function Heading({ as = 'h1', ...props }: HeadingProps) {
  return <Container {...props} as={as} />
}

export default Heading
