import React, { useState } from 'react'
import { useRouter } from 'next/router'

import OrderSummary from '~/components/organisms/OrderSummary'
import getOrderItem from '~/components/organisms/OrderModal/getOrderItem'
import Cart from '~/state/Cart'
import Modals from '~/state/Modal'
import User from '~/state/User'
import getOrderTotalPrice from '~/utils/getOrderTotalPrice'
import { useConfirm } from './ConfirmContainer'
import { parseChange } from '~/pages/payment'
import { post } from '~/api/orders'
import PageLoader from '~/components/organisms/PageLoader'
import Order from '~/state/Order'

function OrderSummaryContainer({
  isFixed = false,
  showConfirmButton = true,
  margin = undefined,
  confirmText = undefined
}) {
  const modals = Modals.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const orderItems = cart.data.map(item => getOrderItem(item))
  const { deliveryTax } = user.getCurrentAddress()
  const router = useRouter()
  const confirm = useConfirm()
  const address = user.getCurrentAddress()
  const [isSendingOrder, setIsSendingOrder] = useState(false)
  const [, setOrder] = Order.useContainer()

  function handleOrderItemRemove(itemId) {
    cart.removeItem(itemId)
  }

  function handleOrderItemEdit(itemId) {
    modals.updateOptions('OrderModal', { isOpen: true, mode: 'edit', itemId })
  }

  async function sendOrder() {
    const items = orderItems.map(item => ({
      ...item,
      totalPrice: item.price * item.quantity
    }))

    const order = {
      items,
      deliveryTax,
      totalPrice: items.reduce((prev, curr) => prev + curr.totalPrice, 0),
      userId: user.state.id,
      addressId: user.state.currentAddress,
      paymentMethodId: user.state.paymentMethodId,
      change: user.state.change ? parseChange(user.state.change) : undefined
    }

    setIsSendingOrder(true)
    const response: any = await post(order)
    router.push(`/track-order/${response.data.id}`)
  }

  function handleConfirmOrder() {
    if (!user.state.token) {
      modals.open('LoginModal')
      return
    }

    if (router.asPath === '/payment') {
      if (!address.title) {
        modals.open('AddressModal')
        return
      }

      confirm({
        title: 'Entregar em',
        message: address.title,
        onDecline: () => modals.open('AddressModal'),
        onConfirm: () => {
          sendOrder()
        }
      })
      return
    }

    router.push('/payment')
  }

  return (
    <>
      {isSendingOrder && <PageLoader />}
      <OrderSummary
        confirmText={confirmText}
        margin={margin}
        showConfirmButton={showConfirmButton}
        isFixed={isFixed}
        items={orderItems}
        subtotal={getOrderTotalPrice(orderItems)}
        deliveryTax={deliveryTax || 0.0}
        total={getOrderTotalPrice(orderItems, deliveryTax)}
        onConfirm={handleConfirmOrder}
        onEdit={itemId => handleOrderItemEdit(itemId)}
        onRemove={itemId => handleOrderItemRemove(itemId)}
        onQuantityChange={cart.changeQuantity}
      />
    </>
  )
}

export default OrderSummaryContainer
