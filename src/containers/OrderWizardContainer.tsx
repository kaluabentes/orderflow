import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { getOptions } from '~/api/options'
import { getProductsGroupedByCategories } from '~/api/products'

import OrderWizard from '~/components/organisms/OrderWizard'
import getInitialState from '~/components/organisms/OrderWizard/getInitialState'
import hasRequiredEmpty from '~/modules/orders/hasRequiredEmpty'
import { Option } from '~/modules/products/types'
import Cart from '~/state/Cart'
import OrderWizardState from '~/state/OrderWizard'

function OrderWizardContainer() {
  const [showRequiredError, setShowRequiredError] = useState(false)
  const [orderWizardValue, setOrderWizardValue] = React.useState<any>(undefined)
  const cart = Cart.useContainer()
  const [orderQuantity, setOrderQuantity] = React.useState(1)
  const orderWizard = OrderWizardState.useContainer()
  const { isOpen, product, itemId, mode } = orderWizard.data
  const [options, setOptions] = useState([])
  const products = useSWR('/api/products', getProductsGroupedByCategories)

  useEffect(() => {
    if (itemId && mode === 'edit') {
      const orderItem = cart.data.find(item => item.id === itemId)

      if (orderItem) {
        setOptions(orderItem.options)
        setOrderWizardValue(orderItem.value)
        setOrderQuantity(orderItem.quantity)
        orderWizard.selectProduct(orderItem.product)
      }
    }
  }, [itemId, mode])

  useEffect(() => {
    if (isOpen && product && mode === 'add') {
      setOptions(product.options)
      setOrderWizardValue(getInitialState(product.options))
    }
  }, [isOpen, product, mode])

  function cleanup() {
    setOrderWizardValue(undefined)
    orderWizard.selectProduct(undefined)
    setOrderQuantity(1)
    setOptions([])
  }

  function confirmOrderWizard(data) {
    if (hasRequiredEmpty(orderWizardValue, options)) {
      setShowRequiredError(true)
      return
    }

    setShowRequiredError(false)
    if (orderWizard.data.mode === 'add') {
      cart.addItem({
        product,
        options,
        value: orderWizardValue,
        quantity: orderQuantity,
        observation: data.observation
      })
    } else if (orderWizard.data.mode === 'edit') {
      cart.editItem({
        id: orderWizard.data.itemId,
        product,
        options,
        value: orderWizardValue,
        quantity: orderQuantity,
        observation: data.observation
      })
    }

    cleanup()
    orderWizard.close()
  }

  return (
    <OrderWizard
      isLoading={!options.length}
      hasRequiredEmpty={showRequiredError}
      quantity={orderQuantity}
      onQuantityChange={value => setOrderQuantity(value)}
      isOpen={isOpen}
      onClose={() => {
        setTimeout(cleanup, 500)
        orderWizard.close()
      }}
      value={orderWizardValue}
      product={product}
      options={options}
      onConfirm={confirmOrderWizard}
      onChange={(optionId, optionValue) =>
        setOrderWizardValue(prevValue => ({
          ...prevValue,
          [optionId]: optionValue
        }))
      }
    />
  )
}

export default OrderWizardContainer
