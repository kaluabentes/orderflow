import React from 'react'

import { ComponentProps } from '../../ComponentProps'
import Icon from '../Icon'

import { Container } from './styles'

interface IconButtonProps extends ComponentProps {
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
