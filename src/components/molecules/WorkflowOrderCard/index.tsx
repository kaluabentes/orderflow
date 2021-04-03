import React from 'react'

import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import theme from '~/styles/theme'
import getDateShort from '~/utils/getDateShort'

function WorkflowOrderCard({ order, isActive, onPress }) {
  return (
    <Actionable
      display="inline-block"
      borderLeft={isActive && `4px solid ${theme.colors.primary}`}
      background="white"
      padding="20px"
      onClick={() => onPress(order)}
      borderBottom="1px solid rgba(0, 0, 0, 0.07)"
      margin="0 0 10px 0"
      borderRadius="4px"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        margin="0 0 15px 0"
      >
        <Heading as="h3" fontWeight="600" fontSize="1.2rem">
          Pedido #{order.id}
        </Heading>
        <Paragraph>{getDateShort(order.createdAt)}</Paragraph>
      </Box>
      <Paragraph color="rgba(0, 0, 0, 0.5)">{`${order.items[0].quantity}x ${order.items[0].title}`}</Paragraph>
    </Actionable>
  )
}

export default WorkflowOrderCard
