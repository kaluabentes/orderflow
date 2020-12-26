import { action } from '@storybook/addon-actions'
import React from 'react'

import Login from '.'

export default {
  title: 'Templates/Login',
  component: Login
}

export const Default = () => (
  <Login onBack={action('onBack')} onSubmit={action('onSubmit')} />
)
