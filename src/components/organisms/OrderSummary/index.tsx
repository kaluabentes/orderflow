import React, { useEffect } from 'react'

import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import List from '~/components/molecules/List'
import OrderItemComponent from '~/components/molecules/OrderItem'
import {
  LoaderPrice,
  LoaderTitle
} from '~/components/molecules/ProductCard/styles'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatMoney'

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
import useIsMobile from '~/utils/useIsMobile'

type Id = string | number

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

interface OrderSummaryProps {
  items: any[]
  subtotal: number
  deliveryTax: number
  total: number
  showConfirmButton?: boolean
  isFixed?: boolean
  onConfirm: () => void
  onEdit: (itemId: Id) => void
  onRemove: (itemId: Id) => void
  onQuantityChange?: (itemId: Id, value: number) => void
}

function OrderSummary({
  margin,
  showConfirmButton = true,
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
  const isMobile = useIsMobile()

  return (
    <Container margin={margin} isFixed={isFixed}>
      <Heading as="h3" fontWeight="500" fontSize="1.375rem" margin="0 0 20px 0">
        {getString('app.orderSummary.title')}
      </Heading>
      {items.length > 0 ? (
        <>
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
          {showConfirmButton && (
            <Button onClick={onConfirm} variant="primary">
              {getString('confirm')}
            </Button>
          )}
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
