import React from 'react'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import Status from '~/components/atoms/Status'
import List from '~/components/molecules/List'
import OrderItem from '~/components/molecules/OrderItem'
import theme from '~/styles/theme'
import formatMoney from '~/utils/formatMoney'
import getCurrentStatus from '~/utils/getCurrentStatus'
import getDate from '~/utils/getDate'
import getTime from '~/utils/getTime'
import useIsMobile from '~/utils/useIsMobile'

function OrderDetail({ order }) {
  const isMobile = useIsMobile()

  return (
    <>
      {!isMobile && (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          margin="0 0 30px 0"
          padding="0 0 15px 0"
          borderBottom="1px solid rgba(0, 0, 0, 0.07)"
        >
          <Heading fontSize="1.5rem">Pedido #{order.id}</Heading>
          <Box
            display="grid"
            gridGap="10px"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            <Button>Rejeitar</Button>
            <Button variant="primary" border="none">
              Aceitar
            </Button>
          </Box>
        </Box>
      )}
      <Box display="grid" gridGap="20px" gridTemplateColumns="repeat(2, 1fr)">
        <Box>
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Data
          </Paragraph>
          <Paragraph margin="0 0 30px 0">
            {getDate(order.createdAt)} {getTime(order.createdAt)}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Estado
          </Paragraph>
          <Paragraph margin="0 0 30px 0">
            <Status>{getCurrentStatus(order.activities).status}</Status>
          </Paragraph>
        </Box>
      </Box>
      <Box display="grid" gridGap="20px" gridTemplateColumns="repeat(2, 1fr)">
        <Box>
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Usuário
          </Paragraph>
          <Paragraph margin="0 0 30px 0">{order.user.name}</Paragraph>
        </Box>
        <Box>
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Celular
          </Paragraph>
          <Paragraph margin="0 0 30px 0">{order.user.phone}</Paragraph>
        </Box>
      </Box>

      <Paragraph fontWeight="600" margin="0 0 5px 0">
        Endereço
      </Paragraph>
      <Paragraph margin="0 0 30px 0">{order.address}</Paragraph>
      <Box display="grid" gridGap="20px" gridTemplateColumns="repeat(2, 1fr)">
        <Box>
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Método de pagamento
          </Paragraph>
          <Paragraph margin="0 0 30px 0">{order.paymentMethod}</Paragraph>
        </Box>
        <Box>
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Troco
          </Paragraph>
          <Paragraph margin="0 0 30px 0">{formatMoney(order.change)}</Paragraph>
        </Box>
      </Box>
      <Paragraph fontWeight="600" margin="0 0 5px 0">
        OBSERVAÇÃO
      </Paragraph>
      <Paragraph margin="0 0 30px 0">{order.observation}</Paragraph>
      <Paragraph fontWeight="600" margin="0 0 20px 0">
        ÍTEMS
      </Paragraph>
      <List width="100%" margin="0 0 15px 0">
        {order.items.map(item => (
          <OrderItem hideControls key={item.id} {...item} />
        ))}
      </List>
      <Paragraph fontWeight="600" margin="0 0 5px 0">
        Taxa de delivery
      </Paragraph>
      <Paragraph margin="0 0 30px 0">
        {formatMoney(order.deliveryTax)}
      </Paragraph>
      <Paragraph fontWeight="600" margin="0 0 5px 0">
        Preço total
      </Paragraph>
      <Paragraph margin="0 0 30px 0">{formatMoney(order.totalPrice)}</Paragraph>
      {isMobile && (
        <Box display="grid" gridGap="10px" gridTemplateColumns="repeat(2, 1fr)">
          <Button>Rejeitar</Button>
          <Button variant="primary" border="none">
            Aceitar
          </Button>
        </Box>
      )}
    </>
  )
}

export default OrderDetail
