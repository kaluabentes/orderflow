import { action } from '@storybook/addon-actions'
import React from 'react'

import Register from '.'

export default {
  title: 'Templates/Register',
  component: Register
}

export const Default = () => (
  <Register
    onBack={action('onBack')}
    onSubmit={action('onSubmit')}
    districts={[
      {
        id: '1',
        name: 'Campeche'
      },
      {
        id: '2',
        name: 'Flores'
      }
    ]}
  />
)
