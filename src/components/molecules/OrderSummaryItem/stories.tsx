import { action } from '@storybook/addon-actions'
import React from 'react'

import OrderSummaryItem from '.'
import List from '../List'

export default {
  title: 'Molecules/OrderSummaryItem',
  component: OrderSummaryItem
}

export const Default = () => (
  <List>
    <OrderSummaryItem
      description="1x Sextou - Quarterão - apenas sanduíche"
      price={21.9}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
    />
  </List>
)
