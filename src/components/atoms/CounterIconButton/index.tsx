import React from 'react'

import { CommonProps } from '~/components/CommonProps'
import Icon from '../Icon'

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
    <Container onClick={onClick} {...props}>
      {count > 0 && (
        <Counter
          textColor={counterTextColor}
          backgroundColor={counterBackgroundColor}
        >
          {count}
        </Counter>
      )}
      <Icon name={name} />
    </Container>
  )
}

export default CounterIconButton
