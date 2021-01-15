import { action } from '@storybook/addon-actions'
import React from 'react'

import OrderSummary from '.'
import { items } from './mock'

export default {
  title: 'Organisms/OrderSummary',
  component: OrderSummary
}

export const Default = () => (
  <OrderSummary
    items={items}
    subtotal={12.9}
    deliveryTax={12.49}
    total={25.39}
    onAdvance={action('onAdvance')}
    onEdit={action('onEdit')}
    onRemove={action('onRemove')}
  />
)

export const Loader = () => <OrderSummary.Loader />
