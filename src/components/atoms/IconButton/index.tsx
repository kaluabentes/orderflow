import React from 'react'

import { CommonProps } from '../../CommonProps'
import Icon from '../Icon'

import { Container } from './styles'

interface IconButtonProps extends CommonProps {
  name: string
  onClick: () => void
}

function IconButton({ name, onClick, ...props }: IconButtonProps) {
  return (
    <Container onClick={onClick} type="button" {...props}>
      <Icon name={name} />
    </Container>
  )
}

export default IconButton
