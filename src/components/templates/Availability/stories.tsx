import { action } from '@storybook/addon-actions'
import React from 'react'

import Availability from '.'

export default {
  title: 'Templates/Availability',
  component: Availability
}

export const Default = () => (
  <Availability
    onBack={action('onBack')}
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
