import React from 'react'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Paragraph from '~/components/atoms/Paragraph'
import Status from '~/components/atoms/Status'
import List from '~/components/molecules/List'
import OrderItem from '~/components/molecules/OrderItem'
import theme from '~/styles/theme'
import formatMoney from '~/utils/formatMoney'
import getCurrentStatus from '~/utils/getCurrentStatus'
import getDate from '~/utils/getDate'
import getTime from '~/utils/getTime'
import Modal from '../Modal'

function WorkflowOrder({ isOpen, order, onClose }) {
  console.log(order)

  return (
    <Modal
      isOpen={isOpen}
      title={`Pedido #${order && order.id}`}
      onClose={onClose}
    >
      {order && (
        <>
          <Box
            display="grid"
            gridGap="15px"
            gridTemplateColumns="repeat(2, 1fr)"
          >
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
          <Box
            display="grid"
            gridGap="15px"
            gridTemplateColumns="repeat(2, 1fr)"
          >
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
          <Paragraph fontWeight="600" margin="0 0 5px 0">
            Método de pagamento
          </Paragraph>
          <Paragraph margin="0 0 30px 0">{order.paymentMethod}</Paragraph>
          <Paragraph
            fontWeight="600"
            margin="0 0 5px 0"
            color={theme.colors.primary}
          >
            Observação
          </Paragraph>
          <Paragraph margin="0 0 30px 0" color={theme.colors.primary}>
            {order.observation}
          </Paragraph>
          <Paragraph fontWeight="600" margin="0 0 20px 0">
            Ítems
          </Paragraph>
          <List margin="0 0 15px 0">
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
          <Paragraph margin="0 0 30px 0">
            {formatMoney(order.totalPrice)}
          </Paragraph>
          <Box
            display="grid"
            gridGap="15px"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            <Button>Rejeitar</Button>
            <Button variant="warning" background="#FFB938" border="none">
              Aceitar
            </Button>
          </Box>
        </>
      )}
    </Modal>
  )
}

export default WorkflowOrder
