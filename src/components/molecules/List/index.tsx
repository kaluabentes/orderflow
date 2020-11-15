import React from 'react'
import { CommonProps } from '~/components/CommonProps'

import { Container, Item } from './styles'

function List({ children, ...commonProps }: CommonProps) {
  return <Container {...commonProps}>{children}</Container>
}

List.Item = Item

export default List
