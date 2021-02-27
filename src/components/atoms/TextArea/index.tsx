import React from 'react'
import { CommonProps } from '~/styles/utils/CommonProps'
import Box from '../Box'
import Label from '../Label'

import { Container } from './styles'

interface TextAreaProps extends CommonProps {
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
}

function TextArea({ label, value, onChange, ...commonProps }: TextAreaProps) {
  return (
    <Box {...commonProps}>
      <Label margin="0 0 10px 0">{label}</Label>
      <Container rows={5} cols={5} onChange={onChange} value={value} />
    </Box>
  )
}

export default TextArea
