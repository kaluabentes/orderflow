import React, { useState } from 'react'

import OrderSummary from '~/components/organisms/OrderSummary'
import getOrderItem from '~/components/organisms/OrderModal/getOrderItem'
import Cart from '~/state/Cart'
import Modals from '~/state/Modals'
import User from '~/state/User'
import getOrderTotalPrice from '~/utils/getters/getOrderTotalPrice'

function OrderSummaryContainer({ isFixed = false }) {
  const modals = Modals.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const orderItems = cart.data.map(item => getOrderItem(item))
  const currentAddress = user.getCurrentAddress()
  const deliveryTax = 0.0

  function handleOrderItemRemove(itemId) {
    cart.removeItem(itemId)
  }

  function handleOrderItemEdit(itemId) {
    modals.updateOptions('OrderModal', { mode: 'edit', itemId })
    modals.open('OrderModal')
  }

  function handleConfirmOrder() {
    if (!currentAddress) {
      modals.open('AddressModal')
      return
    }

    if (!user.state.token) {
      modals.open('LoginModal')
      return
    }
  }

  return (
    <OrderSummary
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
