import React from 'react'
import { CommonProps } from '~/components/CommonProps'
import Box from '../Box'
import Label from '../Label'

import { Container } from './styles'

interface TextAreaProps extends CommonProps {
  label?: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  children: React.ReactNode
}

function TextArea({
  label,
  children,
  onChange,
  ...commonProps
}: TextAreaProps) {
  return (
    <Box {...commonProps}>
      <Label margin="0 0 10px 0">{label}</Label>
      <Container rows={5} cols={5} onChange={onChange}>
        {children}
      </Container>
    </Box>
  )
}

export default TextArea
