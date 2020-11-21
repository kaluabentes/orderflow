import React from 'react'
import { action } from '@storybook/addon-actions'

import ProfileForm from '.'

export default {
  title: 'Organisms/ProfileForm',
  component: ProfileForm
}

export const Default = () => (
  <ProfileForm
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
    onSubmit={action('onSubmit')}
  />
)
