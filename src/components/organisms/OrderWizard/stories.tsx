import React, { useEffect } from 'react'
import { productProps } from '~/components/molecules/ProductCard/mock'
import { OPTIONS } from '~/modules/products/mocks'

import OrderWizard, { Option } from '.'
import getInitialState from './getInitialState'

export default {
  title: 'Organisms/OrderWizard',
  component: OrderWizard
}

export const Default = () => {
  // Option group state map by id
  const [options, setOptions] = React.useState([])
  const [value, setValue] = React.useState<any>(undefined)
  const [quantity, setQuantity] = React.useState(1)

  useEffect(() => {
    setTimeout(() => {
      setOptions(OPTIONS)
      setValue(getInitialState(OPTIONS))
    }, 500)
  }, [])

  return (
    <OrderWizard
      quantity={quantity}
      onQuantityChange={value => setQuantity(value)}
      isOpen
      value={value}
      product={productProps}
      options={options}
      onChange={(optionId, optionValue) =>
        setValue({ ...value, [optionId]: optionValue })
      }
    />
  )
}
