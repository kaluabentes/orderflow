import { action } from '@storybook/addon-actions'
import React from 'react'

import OrderSummary from '.'

export default {
  title: 'Organisms/OrderSummary',
  component: OrderSummary
}

export const Default = () => (
  <OrderSummary
    items={[
      {
        id: 1,
        title: '3x Grande 2 Sabores',
        options: '2x 1/2 Tres queijos, 1x Borda recheada',
        price: 168.0,
        quantity: 2
      },
      {
        id: 2,
        title: '3x Grande 2 Sabores',
        options: '2x 1/2 Tres queijos, 1x Borda recheada',
        price: 168.0,
        quantity: 3
      },
      {
        id: 3,
        title: '3x Grande 2 Sabores',
        options: '2x 1/2 Tres queijos, 1x Borda recheada',
        price: 168.0,
        quantity: 5
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
