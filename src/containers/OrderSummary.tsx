import React, { useState } from 'react'

import OrderSummary from '~/components/organisms/OrderSummary'
import Cart from '~/state/Cart'
import User from '~/state/User'

function getOrderTotalPrice(cart, deliveryTax = undefined) {
  const total = cart.reduce((prev, curr) => prev + curr.price, 0)

  if (deliveryTax) {
    return total + deliveryTax
  }

  return total
}

function OrderSummaryContainer({ isFixed = false }) {
  const { data: cart } = Cart.useContainer()
  const { data: user } = User.useContainer()
  const [orderQuantity, setOrderQuantity] = useState(1)

  function handleOrderItemRemove(itemId) {
    alert(itemId)
  }

  function handleOrderItemEdit(itemId) {
    alert(itemId)
  }

  function handleConfirmOrder() {}

  return (
    <OrderSummary
      isFixed={isFixed}
      items={cart}
      subtotal={getOrderTotalPrice(cart)}
      deliveryTax={user.currentAddress.deliveryTax}
      total={getOrderTotalPrice(cart, user.currentAddress.deliveryTax)}
      onConfirm={handleConfirmOrder}
      onEdit={itemId => handleOrderItemEdit(itemId)}
      onRemove={itemId => handleOrderItemRemove(itemId)}
      onQuantityChange={value => setOrderQuantity(Number(value))}
    />
  )
}

export default OrderSummaryContainer
