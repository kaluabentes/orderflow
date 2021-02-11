import React, { useState } from 'react'
import useSWR from 'swr'
import { getProducts } from '~/api/products'

import OrderSummary from '~/components/organisms/OrderSummary'
import getOrderItem from '~/components/organisms/OrderWizard/getOrderItem'
import Cart from '~/state/Cart'
import OrderWizard from '~/state/OrderWizard'
import User from '~/state/User'
import getOrderTotalPrice from '~/utils/getters/getOrderTotalPrice'

function OrderSummaryContainer({ isFixed = false }) {
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const orderItems = cart.data.map(item => getOrderItem(item))
  const orderWizard = OrderWizard.useContainer()

  function handleOrderItemRemove(itemId) {
    cart.removeItem(itemId)
  }

  function handleOrderItemEdit(itemId) {
    orderWizard.selectMode('edit', itemId)
    orderWizard.open()
  }

  function handleConfirmOrder() {}

  return (
    <OrderSummary
      isFixed={isFixed}
      items={orderItems}
      subtotal={getOrderTotalPrice(orderItems)}
      deliveryTax={user.data.currentAddress.deliveryTax}
      total={getOrderTotalPrice(
        orderItems,
        user.data.currentAddress.deliveryTax
      )}
      onConfirm={handleConfirmOrder}
      onEdit={itemId => handleOrderItemEdit(itemId)}
      onRemove={itemId => handleOrderItemRemove(itemId)}
      onQuantityChange={cart.changeQuantity}
    />
  )
}

export default OrderSummaryContainer
