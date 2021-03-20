import React from 'react'
import Actionable from '~/components/atoms/Actionable'

import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import Status from '~/components/atoms/Status'
import PageLoader from '~/components/organisms/PageLoader'
import months from '~/config/months'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'
import App from '../App'

function getDate(date) {
  return `${date.getDate()} ${months[date.getMonth()]}`
}

function Orders({ isLoading, orders, onOrderClick }) {
  const isMobile = useIsMobile()
  const paddingTop = isMobile ? '15px 15px 0 15px' : '40px 20px 0 20px'

  return isLoading ? (
    <PageLoader />
  ) : (
    <App title="Pedido">
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          width="100%"
          maxWidth={theme.layout.maxWidth}
          padding={`${paddingTop}`}
          margin="0 0 30px 0"
        >
          <Heading
            as="h3"
            fontWeight="500"
            fontSize="1.375rem"
            margin="0 0 20px 0"
            width="100%"
            padding="0"
          >
            Pedidos
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns={`repeat(${isMobile ? '1' : '3'}, 1fr)`}
            gridGap="15px"
          >
            {orders.map(order => {
              const activeActivities = order.activities.filter(
                act => act.isActive
              )
              const status =
                activeActivities.length > 0
                  ? activeActivities[activeActivities.length - 1].status
                  : ''

              return (
                <Actionable
                  display="inline-block"
                  background="white"
                  padding="15px"
                  borderRadius="10px"
                  onClick={() => onOrderClick(order.id)}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    margin="0 0 10px 0"
                  >
                    <Heading fontWeight="600" fontSize="1.2rem">
                      #{order.id}
                    </Heading>
                    <Paragraph>{getDate(order.createdAt)}</Paragraph>
                  </Box>
                  <Paragraph
                    margin="0 0 10px 0"
                    color="rgba(0, 0, 0, 0.5)"
                  >{`${order.items[0].quantity}x ${order.items[0].title}`}</Paragraph>
                  <Status>{status}</Status>
                </Actionable>
              )
            })}
          </Box>
        </Box>
      </Box>
    </App>
  )
}

export default Orders
