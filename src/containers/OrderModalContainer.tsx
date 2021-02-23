import React, { useEffect, useState } from 'react'

import OrderModal from '~/components/organisms/OrderModal'
import getInitialState from '~/components/organisms/OrderModal/getInitialState'
import hasRequiredEmpty from '~/modules/orders/hasRequiredEmpty'
import Cart from '~/state/Cart'
import Modals from '~/state/Modals'

function OrderModalContainer() {
  const modals = Modals.useContainer()
  const modalOptions = modals.getOptions('OrderModal')
  const [showRequiredError, setShowRequiredError] = useState(false)
  const [orderWizardValue, setOrderModalValue] = React.useState<any>(undefined)
  const cart = Cart.useContainer()
  const [orderQuantity, setOrderQuantity] = React.useState(1)
  const [options, setOptions] = useState([])
  const isOpen = modals.isOpen('OrderModal')

  // Open in edit mode
  useEffect(() => {
    if (modalOptions.itemId && modalOptions.mode === 'edit') {
      const orderItem = cart.data.find(item => item.id === modalOptions.itemId)

      if (orderItem) {
        setOptions(orderItem.options)
        setOrderModalValue(orderItem.value)
        setOrderQuantity(orderItem.quantity)
        modals.updateOptions('OrderModal', { product: orderItem.product })
      }
    }
  }, [modalOptions.itemId, modalOptions.mode])

  // Open in add mode
  useEffect(() => {
    if (isOpen && modalOptions.product && modalOptions.mode === 'add') {
      setOptions(modalOptions.product.options)
      setOrderModalValue(getInitialState(modalOptions.product.options))
    }
  }, [isOpen, modalOptions.product, modalOptions.mode])

  function cleanup() {
    setOrderModalValue(undefined)
    modals.updateOptions('OrderModal', { product: undefined })
    setOrderQuantity(1)
    setOptions([])
  }

  function confirmOrderModal(data) {
    if (hasRequiredEmpty(orderWizardValue, options)) {
      setShowRequiredError(true)
      return
    }

    setShowRequiredError(false)
    if (modalOptions.mode === 'add') {
      cart.addItem({
        product: modalOptions.product,
        options,
        value: orderWizardValue,
        quantity: orderQuantity,
        observation: data.observation
      })
    } else if (modalOptions.mode === 'edit') {
      cart.editItem({
        id: modalOptions.itemId,
        product: modalOptions.product,
        options,
        value: orderWizardValue,
        quantity: orderQuantity,
        observation: data.observation
      })
    }

    cleanup()
    modals.close('OrderModal')
  }

  return (
    <OrderModal
      isLoading={!options.length}
      hasRequiredEmpty={showRequiredError}
      quantity={orderQuantity}
      onQuantityChange={value => setOrderQuantity(value)}
      isOpen={modals.isOpen('OrderModal')}
      onClose={() => {
        setTimeout(cleanup, 500)
        modals.close('OrderModal')
      }}
      value={orderWizardValue}
      product={modalOptions.product}
      options={options}
      onConfirm={confirmOrderModal}
      onChange={(optionId, optionValue) =>
        setOrderModalValue(prevValue => ({
          ...prevValue,
          [optionId]: optionValue
        }))
      }
    />
  )
}

export default OrderModalContainer
