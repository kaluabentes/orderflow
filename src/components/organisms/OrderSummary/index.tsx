import React from 'react'

import Button from '~/components/atoms/Button'
import Box from '~/components/Box'
import List from '~/components/molecules/List'
import OrderSummaryItem from '~/components/molecules/OrderSummaryItem'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatters/formatMoney'

import { Container, Title, Summary, SubtotalLabel, TotalLabel } from './styles'

type Id = string | number

interface Product {
  id: Id
  description: string
  price: number
}

interface OrderSummaryProps {
  products: Product[]
  subtotal: number
  deliveryFee: number
  total: number
  isFixed?: boolean
  onAdvance: () => void
  onEdit: (productId: Id) => void
  onRemove: (productId: Id) => void
}

function OrderSummary({
  products,
  subtotal,
  deliveryFee,
  total,
  isFixed = false,
  onAdvance,
  onEdit,
  onRemove
}: OrderSummaryProps) {
  return (
    <Container isFixed={isFixed}>
      <Title>{getString('app.orderSummary.title')}</Title>
      <List margin="0 0 20px 0">
        {products.map(({ id, description, price }) => (
          <OrderSummaryItem
            key={id}
            description={description}
            price={price}
            onEdit={() => onEdit(id)}
            onRemove={() => onRemove(id)}
          />
        ))}
      </List>
      <Summary>
        <Box align="left">
          <SubtotalLabel>{getString('app.subtotal')}</SubtotalLabel>
          <SubtotalLabel>{getString('app.deliveryFee')}</SubtotalLabel>
          <TotalLabel>{getString('app.total')}</TotalLabel>
        </Box>
        <Box align="right">
          <SubtotalLabel>{formatMoney(subtotal)}</SubtotalLabel>
          <SubtotalLabel>{formatMoney(deliveryFee)}</SubtotalLabel>
          <TotalLabel>{formatMoney(total)}</TotalLabel>
        </Box>
      </Summary>
      <Button onClick={onAdvance} variant="primary">
        {getString('app.advance')}
      </Button>
    </Container>
  )
}

export default OrderSummary
