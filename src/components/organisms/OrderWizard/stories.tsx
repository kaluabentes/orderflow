import React, { useEffect } from 'react'
import { productProps } from '~/components/molecules/ProductCard/mock'

import OrderWizard, { Option } from '.'
import getInitialState from './getInitialState'

export default {
  title: 'Organisms/OrderWizard',
  component: OrderWizard
}

const OPTIONS: Option[] = [
  {
    id: '1',
    type: 'check',
    limit: 2,
    title: 'Tipo de pão',
    priceCalcFilter: 'average',
    inputs: [
      {
        id: '1',
        label: 'Pão Australiano',
        price: 12.5
      },
      {
        id: '2',
        label: 'Pão Australiano',
        price: 20.5
      },
      {
        id: '3',
        label: 'Pão Australiano',
        price: 30.5
      }
    ]
  },
  {
    id: '2',
    type: 'radio',
    limit: 1,
    title: 'Tipo de pão',
    priceCalcFilter: 'max',
    inputs: [
      {
        id: '4',
        label: 'Pão Australiano',
        price: 50.5
      },
      {
        id: '5',
        label: 'Pão Australiano'
      },
      {
        id: '6',
        label: 'Pão Australiano'
      }
    ]
  },
  {
    id: '3',
    type: 'amount',
    limit: 6,
    title: 'Tipo de pão',
    priceCalcFilter: 'min',
    inputs: [
      {
        id: '7',
        label: 'Pão Australiano',
        price: 12.5
      },
      {
        id: '8',
        label: 'Pão Australiano',
        price: 12.5
      },
      {
        id: '9',
        label: 'Pão Australiano',
        price: 15.2
      }
    ]
  }
]

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
