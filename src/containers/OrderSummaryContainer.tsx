import React, { useState } from 'react'
import { useRouter } from 'next/router'

import OrderSummary from '~/components/organisms/OrderSummary'
import getOrderItem from '~/components/organisms/OrderWizard/getOrderItem'
import Cart from '~/state/Cart'
import Modal from '~/state/Modal'
import User from '~/state/User'
import getOrderTotalPrice from '~/utils/getOrderTotalPrice'
import { useConfirm } from './ConfirmContainer'
import { parseChange } from '~/pages/payment'
import { post } from '~/api/orders'
import PageLoader from '~/components/organisms/PageLoader'

function OrderSummaryContainer({
  isFixed = false,
  showConfirmButton = true,
  margin = undefined,
  confirmText = undefined,
  maxWidth = undefined
}) {
  const modal = Modal.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const orderItems = cart.data.map(item => getOrderItem(item))
  const { deliveryTax } = user.getCurrentAddress()
  const router = useRouter()
  const confirm = useConfirm()
  const address = user.getCurrentAddress()
  const [isSendingOrder, setIsSendingOrder] = useState(false)

  function handleOrderItemRemove(itemId) {
    cart.removeItem(itemId)
  }

  function handleOrderItemEdit(itemId) {
    modal.updateOptions('OrderWizard', { isOpen: true, mode: 'edit', itemId })
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
    cart.clear()
    user.clear()
    user.addOrder(response.data)
    router.push(`/track-order/${response.data.id}`)
  }

  function handleConfirmOrder() {
    if (!user.state.token) {
      modal.open('LoginModal')
      return
    }

    if (router.asPath === '/payment') {
      if (!user.state.paymentMethodId) {
        modal.open('Alert', {
          title: 'Atenção',
          message: 'Escolha uma forma de pagamento'
        })
        return
      }

      if (!address.title) {
        modal.open('AddressModal')
        return
      }

      confirm({
        title: 'Entregar em',
        message: address.title,
        onDecline: () => modal.open('AddressModal'),
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
        maxWidth={maxWidth}
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
