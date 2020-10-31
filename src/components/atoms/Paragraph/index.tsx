import React from 'react'
import { BaseProps } from '../../BaseProps'

import { Container } from './styles'

interface ParagraphProps extends BaseProps {
  variant?: 'default' | 'muted'
  size?: 'xsmall' | 'small' | 'medium'
}

function Paragraph({
  size = 'small',
  variant = 'default',
  ...props
}: ParagraphProps) {
  return <Container size={size} variant={variant} {...props} />
}

export default Paragraph