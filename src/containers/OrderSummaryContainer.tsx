import React, { useState } from 'react'

import OrderSummary from '~/components/organisms/OrderSummary'
import Cart from '~/state/Cart'
import User from '~/state/User'

function getOrderTotalPrice(cart, deliveryTax = undefined) {
  const total = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  )

  if (deliveryTax) {
    return total + deliveryTax
  }

  return total
}

function OrderSummaryContainer({ isFixed = false }) {
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const [orderQuantity, setOrderQuantity] = useState(1)

  function handleOrderItemRemove(itemId) {
    cart.removeItem(itemId)
  }

  function handleOrderItemEdit(itemId) {
    alert(itemId)
  }

  function handleConfirmOrder() {}

  function handleQuantityChange(itemId, value) {
    cart.changeQuantity(itemId, value)
  }

  return (
    <OrderSummary
      isFixed={isFixed}
      items={cart.data}
      subtotal={getOrderTotalPrice(cart.data)}
      deliveryTax={user.data.currentAddress.deliveryTax}
      total={getOrderTotalPrice(
        cart.data,
        user.data.currentAddress.deliveryTax
      )}
      onConfirm={handleConfirmOrder}
      onEdit={itemId => handleOrderItemEdit(itemId)}
      onRemove={itemId => handleOrderItemRemove(itemId)}
      onQuantityChange={handleQuantityChange}
    />
  )
}

export default OrderSummaryContainer
