import React, { useEffect, useState } from 'react'

import OrderWizard from '~/components/organisms/OrderWizard'
import getInitialState from '~/components/organisms/OrderWizard/getInitialState'
import hasRequiredEmpty from '~/modules/orders/hasRequiredEmpty'
import Cart from '~/state/Cart'
import Modals from '~/state/Modal'

function OrderModalContainer() {
  const modals = Modals.useContainer()
  const modalOptions = modals.getOptions('OrderWizard')
  const [showRequiredError, setShowRequiredError] = useState(false)
  const [orderWizardValue, setOrderModalValue] = React.useState<any>(undefined)
  const cart = Cart.useContainer()
  const [orderQuantity, setOrderQuantity] = React.useState(1)
  const [options, setOptions] = useState([])
  const isOpen = modals.isOpen('OrderWizard')

  // Open in edit mode
  useEffect(() => {
    if (modalOptions.itemId && modalOptions.mode === 'edit') {
      const orderItem = cart.data.find(item => item.id === modalOptions.itemId)

      if (orderItem) {
        setOptions(orderItem.options)
        setOrderModalValue(orderItem.value)
        setOrderQuantity(orderItem.quantity)
        modals.updateOptions('OrderWizard', { product: orderItem.product })
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
    modals.updateOptions('OrderWizard', { product: undefined })
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
    modals.close('OrderWizard')
  }

  return (
    <OrderWizard
      isLoading={!options.length}
      mode={modalOptions.mode}
      hasRequiredEmpty={showRequiredError}
      quantity={orderQuantity}
      onQuantityChange={value => setOrderQuantity(value)}
      isOpen={modals.isOpen('OrderWizard')}
      onClose={() => {
        setTimeout(cleanup, 500)
        modals.close('OrderWizard', { mode: undefined })
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
