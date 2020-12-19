import { action } from '@storybook/addon-actions'
import React from 'react'

import CartIconButton from '.'

export default {
  title: 'Atoms/CartIconButton',
  component: CartIconButton
}

export const Default = () => (
  <CartIconButton onClick={action('onClick')} count={10} />
)
