import React from 'react'

import ActionButton from '~/components/atoms/ActionButton'
import Amount from '~/components/atoms/Amount'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import { CommonProps } from '~/components/CommonProps'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatters/formatMoney'

import { Container, ContentGrid, Description, Price } from './styles'

interface OrderItemProps extends CommonProps {
  title: string
  options: string
  price: number
  quantity?: number
  onEdit: () => void
  onRemove: () => void
  onQuantityChange?: (value: number) => void
}

function OrderItem({
  title,
  options,
  price,
  quantity,
  onEdit,
  onRemove,
  onQuantityChange
}: OrderItemProps) {
  return (
    <Container>
      <Box flexDirection="row" alignItems="flex-start">
        <Box>
          <Heading margin="0 0 5px 0" fontWeight="500" as="h4">
            {title}
          </Heading>
        </Box>
        <Box flex="1 auto">
          <Price>{formatMoney(price)}</Price>
        </Box>
      </Box>
      <Paragraph margin="0 0 20px 0" fontSize="1rem" variant="muted">
        {options}
      </Paragraph>
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

export default OrderItem
