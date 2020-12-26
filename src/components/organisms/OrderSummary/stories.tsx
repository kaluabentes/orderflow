import { action } from '@storybook/addon-actions'
import React from 'react'

import OrderSummary from '.'
import List from '../List'

export default {
  title: 'Molecules/OrderSummary',
  component: OrderSummary
}

export const Default = () => (
  <OrderSummary
    products={[
      {
        id: 1,
        description: '1x Sextou - Quarterão - apenas sanduíche',
        price: 20.9
      },
      {
        id: 2,
        description: '1x Sextou - Quarterão - apenas sanduíche',
        price: 21.9
      },
      {
        id: 3,
        description: '1x Sextou - Quarterão - apenas sanduíche',
        price: 21.9
      }
    ]}
    subtotal={12.9}
    deliveryFee={12.49}
    total={25.39}
    onAdvance={action('onAdvance')}
    onEdit={action('onEdit')}
    onRemove={action('onRemove')}
  />
)

export const Loader = () => <OrderSummary.Loader />
