import React from 'react'

import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import List from '~/components/molecules/List'
import OrderItem from '~/components/molecules/OrderItem'
import {
  LoaderPrice,
  LoaderTitle
} from '~/components/molecules/ProductCard/styles'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatters/formatMoney'

import {
  Container,
  Title,
  Summary,
  SubtotalLabel,
  TotalLabel,
  Scroller
} from './styles'

type Id = string | number

interface OrderItemProps {
  id: Id
  title: string
  options: string
  price: number
  quantity: number
}

interface OrderSummaryProps {
  items: OrderItemProps[]
  subtotal: number
  deliveryFee: number
  total: number
  isFixed?: boolean
  onAdvance: () => void
  onEdit: (productId: Id) => void
  onRemove: (productId: Id) => void
  onQuantityChange?: (productId: Id, value: number) => void
}

function Loader() {
  return (
    <Container>
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
      <LoaderPrice style={{ marginBottom: 20 }} />
      <LoaderTitle />
    </Container>
  )
}

function OrderSummary({
  items,
  subtotal,
  deliveryFee,
  total,
  isFixed = false,
  onAdvance,
  onEdit,
  onRemove,
  onQuantityChange
}: OrderSummaryProps) {
  return (
    <Container isFixed={isFixed}>
      <Title>{getString('app.orderSummary.title')}</Title>
      <Scroller isFixed={isFixed}>
        <List>
          {items.map(item => (
            <OrderItem
              key={item.id}
              title={item.title}
              options={item.options}
              price={item.price}
              quantity={item.quantity}
              onEdit={() => onEdit(item.id)}
              onRemove={() => onRemove(item.id)}
              onQuantityChange={value => onQuantityChange(item.id, value)}
            />
          ))}
        </List>
      </Scroller>
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

OrderSummary.Loader = Loader

export default OrderSummary
