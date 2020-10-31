import React from 'react'
import { BaseProps } from '../../BaseProps'

import { Container } from './styles'

interface ParagraphProps extends BaseProps {
  variant?: 'default' | 'muted'
}

function Paragraph({ variant = 'default', ...props }: ParagraphProps) {
  return <Container variant={variant} {...props} />
}

export default Paragraph
