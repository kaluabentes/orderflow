import React from 'react'

import { CommonProps } from '~/components/CommonProps'
import IconButton from '../IconButton'

import { Container, Counter } from './styles'

interface CounterIconButtonProps extends CommonProps {
  name: string
  onClick: () => void
  count: string | number
  counterBackgroundColor?: string
  counterTextColor?: string
}

function CounterIconButton({
  name,
  onClick,
  count,
  counterBackgroundColor = '#00ff00',
  counterTextColor = '#000',
  ...props
}: CounterIconButtonProps) {
  return (
    <Container {...props}>
      <Counter
        textColor={counterTextColor}
        backgroundColor={counterBackgroundColor}
      >
        {count}
      </Counter>
      <IconButton name={name} onClick={onClick} />
    </Container>
  )
}

export default CounterIconButton
