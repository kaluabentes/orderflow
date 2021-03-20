import React from 'react'

import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import PageLoader from '~/components/organisms/PageLoader'
import useIsMobile from '~/utils/useIsMobile'
import OrderItem from '~/components/molecules/OrderItem'
import App from '../App'
import List from '~/components/molecules/List'
import formatMoney from '~/utils/formatMoney'
import Button from '~/components/atoms/Button'
import getString from '~/i18n/getString'
import getDate from '~/utils/getDate'
import getTime from '~/utils/getTime'

function Order({ isLoading, order, onTrackOrder }) {
  const isMobile = useIsMobile()
  console.log(order)
  return isLoading ? (
    <PageLoader />
  ) : (
    <App title="Pedido">
      <Box display="flex" alignItems="center">
        <Paper maxWidth="500px" margin={isMobile ? '15px 0' : '40px 0 20px 0'}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            margin="0 0 10px 0"
          >
            <Heading margin="0" as="h2" fontWeight="500" fontSize="1.375rem">
              Pedido
            </Heading>
            <Paragraph fontWeight="600" fontSize="1.375rem">
              #{order.id}
            </Paragraph>
          </Box>
          <Paragraph variant="muted" margin="0 0 30px 0" fontSize="0.875rem">
            Em {getDate(order.createdAt)} ás{' '}
            {getTime(order.createdAt).padStart(5, '0')}
          </Paragraph>
          <Heading margin="0 0 10px 0" as="h3" fontSize="1rem">
            Items
          </Heading>
          <List margin="0 0 10px 0">
            {order.items.map(item => (
              <OrderItem
                key={item.id}
                title={item.title}
                options={item.options}
                price={item.price}
                quantity={item.quantity}
                hideControls
              />
            ))}
          </List>
          <Heading margin="0 0 10px 0" as="h3" fontSize="1rem">
            Observação
          </Heading>
          <Paragraph margin="0 0 20px 0">
            {order.observation ? order.observation : '----'}
          </Paragraph>
          <Heading margin="0 0 10px 0" as="h3" fontSize="1rem">
            Endereço
          </Heading>
          <Paragraph margin="0 0 20px 0">{order.address}</Paragraph>
          <Heading margin="0 0 10px 0" as="h3" fontSize="1rem">
            Taxa de delivery
          </Heading>
          <Paragraph margin="0 0 20px 0">
            {formatMoney(order.deliveryTax)}
          </Paragraph>
          <Heading margin="0 0 10px 0" as="h3" fontSize="1rem">
            Método de pagamento
          </Heading>
          <Paragraph margin="0 0 30px 0">{order.paymentMethod}</Paragraph>
          <Heading margin="0 0 10px 0" as="h3" fontSize="1rem">
            Preço total
          </Heading>
          <Paragraph margin="0 0 20px 0" fontSize="1.5rem" fontWeight="700">
            {formatMoney(order.totalPrice)}
          </Paragraph>
          <Button onClick={() => onTrackOrder(order.id)}>
            {getString('trackOrder')}
          </Button>
        </Paper>
      </Box>
    </App>
  )
}

export default Order
