import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Container } from './styles'

interface ParagraphProps extends CommonProps {
  variant?: 'default' | 'muted'
  size?: 'xsmall' | 'small' | 'medium'
  weight?: string
}

function Paragraph({
  size = 'small',
  variant = 'default',
  weight = 'normal',
  ...props
}: ParagraphProps) {
  return <Container weight={weight} variant={variant} {...props} />
}

export default Paragraph
