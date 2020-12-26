import React from 'react'

import ActionButton from '~/components/atoms/ActionButton'
import Amount from '~/components/atoms/Amount'
import { CommonProps } from '~/components/CommonProps'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatters/formatMoney'

import { Container, ContentGrid, Description, Price } from './styles'

interface OrderSummaryItemProps extends CommonProps {
  description: string
  price: number
  quantity?: number
  onEdit: () => void
  onRemove: () => void
  onQuantityChange?: (value: number) => void
}

function OrderSummaryItem({
  description,
  price,
  quantity,
  onEdit,
  onRemove,
  onQuantityChange
}: OrderSummaryItemProps) {
  return (
    <Container>
      <ContentGrid alignItems="flex-start">
        <Description>{description}</Description>
        <Price>{formatMoney(price)}</Price>
      </ContentGrid>
      <ContentGrid alignItems="center">
        <div>
          <ActionButton margin="0 20px 0 0" onClick={onEdit}>
            {getString('app.edit')}
          </ActionButton>
          <ActionButton variant="primary" onClick={onRemove}>
            {getString('app.remove')}
          </ActionButton>
        </div>
        <Amount value={quantity} onChange={onQuantityChange} />
      </ContentGrid>
    </Container>
  )
}

export default OrderSummaryItem
