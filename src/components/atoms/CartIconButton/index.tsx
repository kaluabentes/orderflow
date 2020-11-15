import React from 'react'

import IconButton from '../IconButton'

import { Container, Counter } from './styles'

interface CartIconButtonProps {
  onClick: () => void
  count: string | number
}

function CartIconButton({ onClick, count }: CartIconButtonProps) {
  return (
    <Container>
      <Counter>{count}</Counter>
      <IconButton name="shopping_cart" onClick={onClick} />
    </Container>
  )
}

export default CartIconButton
