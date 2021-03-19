import React from 'react'

import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import PageLoader from '~/components/organisms/PageLoader'
import months from '~/config/months'
import useIsMobile from '~/utils/useIsMobile'
import App from '../App'

function getDate(date) {
  return `${date.getDate()} ${months[date.getMonth()]}`
}

function Orders({ isLoading, orders }) {
  const isMobile = useIsMobile()
  const paddingTop = isMobile ? '15px' : '30px'

  return isLoading ? (
    <PageLoader />
  ) : (
    <App title="Pedido">
      <Box alignItems="center">
        <Box width="100%" maxWidth="400px" padding={`${paddingTop} 15px`}>
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
          {orders.map(order => (
            <Paper margin="0 0 15px 0">
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                margin="0 0 0"
              >
                <Heading fontWeight="600" fontSize="1.2rem">
                  #{order.id}
                </Heading>
                <Paragraph>{getDate(order.createdAt)}</Paragraph>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </App>
  )
}

export default Orders
