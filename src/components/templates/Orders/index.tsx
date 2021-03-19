import React from 'react'
import Actionable from '~/components/atoms/Actionable'

import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import PageLoader from '~/components/organisms/PageLoader'
import months from '~/config/months'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'
import App from '../App'

function getDate(date) {
  return `${date.getDate()} ${months[date.getMonth()]}`
}

const StatusMap = {
  confirmed: 'Confirmado',
  sent: 'Aguardando confirmação',
  ready: 'A caminho',
  finished: 'Entregue'
}

function Orders({ isLoading, orders, onOrderClick }) {
  const isMobile = useIsMobile()
  const paddingTop = isMobile ? '15px' : '30px'

  return isLoading ? (
    <PageLoader />
  ) : (
    <App title="Pedido">
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          width="100%"
          maxWidth={theme.layout.maxWidth}
          padding={`${paddingTop} 15px`}
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
                  borderRadius="5px"
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
                  <Box
                    display="inline-block"
                    padding="5px 10px"
                    borderRadius="20px"
                    color={status !== 'finished' ? 'white' : theme.colors.text}
                    fontSize="0.875rem"
                    textTransform="uppercase"
                    fontWeight="600"
                    background={
                      status === 'finished' ? 'white' : theme.colors.primary
                    }
                    border={
                      status === 'finished' && '1px solid rgba(0, 0, 0, 0.5)'
                    }
                  >
                    {StatusMap[status]}
                  </Box>
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
