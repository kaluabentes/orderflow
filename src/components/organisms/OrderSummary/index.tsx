import React from 'react'

import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import List from '~/components/molecules/List'
import OrderItemComponent from '~/components/molecules/OrderItem'
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
import Icon from '~/components/atoms/Icon'
import theme from '~/styles/theme'
import Heading from '~/components/atoms/Heading'

type Id = string | number

interface OrderSummaryProps {
  items: any[]
  subtotal: number
  deliveryTax: number
  total: number
  isFixed?: boolean
  onConfirm: () => void
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
  deliveryTax,
  total,
  isFixed = false,
  onConfirm,
  onEdit,
  onRemove,
  onQuantityChange
}: OrderSummaryProps) {
  return (
    <Container isFixed={isFixed}>
      {items.length > 0 ? (
        <>
          <Heading as="h3" fontSize="xlarge">
            {getString('app.orderSummary.title')}
          </Heading>
          <Scroller isFixed={isFixed}>
            <List>
              {items.map(item => (
                <OrderItemComponent
                  key={item.id}
                  title={item.title}
                  options={item.options}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={value => onQuantityChange(item.id, value)}
                  onEdit={() => onEdit(item.id)}
                  onRemove={() => onRemove(item.id)}
                />
              ))}
            </List>
          </Scroller>
          <Summary isFixed={isFixed}>
            <Box align="left">
              <SubtotalLabel>{getString('app.subtotal')}</SubtotalLabel>
              <SubtotalLabel>{getString('app.deliveryTax')}</SubtotalLabel>
              <TotalLabel>{getString('app.total')}</TotalLabel>
            </Box>
            <Box align="right">
              <SubtotalLabel>{formatMoney(subtotal)}</SubtotalLabel>
              <SubtotalLabel>{formatMoney(deliveryTax)}</SubtotalLabel>
              <TotalLabel>{formatMoney(total)}</TotalLabel>
            </Box>
          </Summary>
          <Button onClick={onConfirm} variant="primary">
            {getString('app.advance')}
          </Button>
        </>
      ) : (
        <Box padding="20px" alignItems="center">
          <Icon
            margin="0 0 30px 0"
            fontSize="150px"
            color={theme.colors.background}
            name="remove_shopping_cart"
          />
          <Heading
            as="h4"
            fontSize="large"
            align="center"
            fontWeight="500"
            color={theme.colors.textMuted}
          >
            {getString('cartEmptyMessage')}
          </Heading>
        </Box>
      )}
    </Container>
  )
}

OrderSummary.Loader = Loader

export default OrderSummary
