import React from 'react'

import ActionButton from '~/components/atoms/ActionButton'
import { CommonProps } from '~/components/CommonProps'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatters/formatMoney'

import { Container, ContentGrid, Description, Price } from './styles'

interface OrderSummaryItemProps extends CommonProps {
  description: string
  price: number
  onEdit: () => void
  onRemove: () => void
}

function OrderSummaryItem({
  description,
  price,
  onEdit,
  onRemove
}: OrderSummaryItemProps) {
  return (
    <Container>
      <ContentGrid>
        <Description>{description}</Description>
        <Price>{formatMoney(price)}</Price>
      </ContentGrid>
      <ActionButton margin="0 20px 0 0" onClick={onEdit}>
        {getString('app.edit')}
      </ActionButton>
      <ActionButton variant="primary" onClick={onRemove}>
        {getString('app.remove')}
      </ActionButton>
    </Container>
  )
}

export default OrderSummaryItem
