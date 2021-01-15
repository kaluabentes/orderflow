import { action } from '@storybook/addon-actions'
import React from 'react'

import OrderItem from '.'
import List from '../List'

export default {
  title: 'Molecules/OrderItem',
  component: OrderItem
}

export const orderItem = {
  title: '3x Grande 2 Sabores',
  options: '2x 1/2 Tres queijos, 1x Borda recheada',
  price: 168.0
}

export const Default = () => (
  <List>
    <OrderItem
      {...orderItem}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
    />
  </List>
)
