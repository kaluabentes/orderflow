import React, { useState } from 'react'
import { useRouter } from 'next/router'

import OrderSummary from '~/components/organisms/OrderSummary'
import getOrderItem from '~/components/organisms/OrderModal/getOrderItem'
import Cart from '~/state/Cart'
import Modals from '~/state/Modal'
import User from '~/state/User'
import getOrderTotalPrice from '~/utils/getOrderTotalPrice'

function OrderSummaryContainer({
  isFixed = false,
  showConfirmButton = true,
  margin = undefined
}) {
  const modals = Modals.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const orderItems = cart.data.map(item => getOrderItem(item))
  const currentAddress = user.getCurrentAddress()
  const deliveryTax = 0.0
  const router = useRouter()

  function handleOrderItemRemove(itemId) {
    cart.removeItem(itemId)
  }

  function handleOrderItemEdit(itemId) {
    modals.updateOptions('OrderModal', { isOpen: true, mode: 'edit', itemId })
  }

  function handleConfirmOrder() {
    if (!user.state.token) {
      modals.open('LoginModal')
      return
    }

    router.push('/payment')
  }

  return (
    <OrderSummary
      margin={margin}
      showConfirmButton={showConfirmButton}
      isFixed={isFixed}
      items={orderItems}
      subtotal={getOrderTotalPrice(orderItems)}
      deliveryTax={deliveryTax}
      total={getOrderTotalPrice(orderItems, deliveryTax)}
      onConfirm={handleConfirmOrder}
      onEdit={itemId => handleOrderItemEdit(itemId)}
      onRemove={itemId => handleOrderItemRemove(itemId)}
      onQuantityChange={cart.changeQuantity}
    />
  )
}

export default OrderSummaryContainer
