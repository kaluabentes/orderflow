import React from 'react'

import { CommonProps } from '~/components/CommonProps'
import { Container } from './styles'

interface LabelProps extends CommonProps {
  htmlFor: string
}

function Label({ children, htmlFor, ...props }: LabelProps) {
  return (
    <Container
      htmlFor={htmlFor}
      dangerouslySetInnerHTML={{ __html: children }}
      {...props}
    />
  )
}

export default Label
