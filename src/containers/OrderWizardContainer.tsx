import React, { useEffect, useState } from 'react'

import OrderWizard from '~/components/organisms/OrderWizard'
import getInitialState from '~/components/organisms/OrderWizard/getInitialState'
import getOrderItem from '~/components/organisms/OrderWizard/getOrderItem'
import OPTIONS from '~/data/options.json'
import hasRequiredEmpty from '~/modules/orders/hasRequiredEmpty'
import { Option } from '~/modules/products/types'
import Cart from '~/state/Cart'
import OrderWizardState from '~/state/OrderWizard'

function OrderWizardContainer() {
  const [showRequiredError, setShowRequiredError] = useState(false)
  const [orderWizardValue, setOrderWizardValue] = React.useState<any>(undefined)
  const cart = Cart.useContainer()
  const [options, setOptions] = useState([])
  const [orderQuantity, setOrderQuantity] = React.useState(1)
  const orderWizard = OrderWizardState.useContainer()
  const { isOpen, product } = orderWizard.data

  useEffect(() => {
    if (isOpen) {
      setOptions(OPTIONS)
      setOrderWizardValue(getInitialState(OPTIONS as Option[]))
    }
  }, [isOpen])

  function confirmOrderWizard(data) {
    if (hasRequiredEmpty(orderWizardValue, options)) {
      setShowRequiredError(true)
      return
    }

    setShowRequiredError(false)
    cart.addItem(
      getOrderItem(
        product,
        options,
        orderWizardValue,
        orderQuantity,
        data.observation
      )
    )

    orderWizard.close()
  }

  return (
    <OrderWizard
      hasRequiredEmpty={showRequiredError}
      quantity={orderQuantity}
      onQuantityChange={value => setOrderQuantity(value)}
      isOpen={isOpen}
      onClose={() => orderWizard.close()}
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
