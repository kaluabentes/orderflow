import React from 'react'

import ActionButton from '~/components/atoms/ActionButton'
import Amount from '~/components/atoms/Amount'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import { CommonProps } from '~/styles/utils/CommonProps'
import getString from '~/i18n/getString'
import formatMoney from '~/utils/formatMoney'

import { Container, ContentGrid, Description, Price } from './styles'

interface OrderItemProps extends CommonProps {
  title: string
  options: string
  price: number
  quantity?: number
  hideControls?: boolean
  onEdit?: () => void
  onRemove?: () => void
  onQuantityChange?: (value: number) => void
}

function OrderItem({
  title,
  options,
  price,
  quantity,
  hideControls = false,
  onEdit,
  onRemove,
  onQuantityChange
}: OrderItemProps) {
  return (
    <Container>
      <Box
        display="flex"
        margin="0 0 10px 0"
        flexDirection="row"
        alignItems="flex-start"
      >
        <Box display="flex">
          <Heading fontWeight="500" as="h4">
            {quantity}x {title}
          </Heading>
        </Box>
        <Box display="flex" flex="1 auto">
          <Price>{formatMoney(price * quantity)}</Price>
        </Box>
      </Box>

      {hideControls
        ? options.split(',').map(optionItem => (
            <Paragraph
              margin="0 0 10px 0"
              fontWeight="500"
              fontSize="0.875rem"
              variant="muted"
            >
              {optionItem}
            </Paragraph>
          ))
        : options}

      {!hideControls && (
        <ContentGrid alignItems="center">
          <div>
            <ActionButton margin="0 20px 0 0" onClick={onEdit}>
              {getString('app.edit')}
            </ActionButton>
            <ActionButton variant="primary" onClick={onRemove}>
              {getString('app.remove')}
            </ActionButton>
          </div>
          <Amount
            isLeftDisabled={quantity === 1}
            value={quantity}
            onChange={onQuantityChange}
          />
        </ContentGrid>
      )}
    </Container>
  )
}

export default OrderItem
