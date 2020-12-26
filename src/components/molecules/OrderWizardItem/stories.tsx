import { action } from '@storybook/addon-actions'
import React from 'react'

import OrderWizardItem from '.'

export default {
  title: 'Molecules/OrderWizardItem',
  component: OrderWizardItem
}

export const RadioType = () => (
  <OrderWizardItem type="radio" value={} onChange={action('onChange')}>
    Fritas média
  </OrderWizardItem>
)

export const CheckboxType = () => (
  <OrderWizardItem type="checkbox" onChange={action('onChange')}>
    Babecue
  </OrderWizardItem>
)

export const AmountType = () => (
  <OrderWizardItem type="amount" onChange={action('onChange')}>
    Cheddar
  </OrderWizardItem>
)
