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
import OrderDetail from '../OrderDetail'

function WorkflowOrder({ isOpen, order, onClose }) {
  console.log(order)

  return (
    <Modal
      isOpen={isOpen}
      title={`Pedido #${order && order.id}`}
      onClose={onClose}
    >
      {order && <OrderDetail order={order} />}
    </Modal>
  )
}

export default WorkflowOrder
