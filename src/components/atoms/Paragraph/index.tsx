import React from 'react'
import { CommonProps } from '../../../styles/utils/CommonProps'

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
  return <Container {...props} size={size} weight={weight} variant={variant} />
}

export default Paragraph
