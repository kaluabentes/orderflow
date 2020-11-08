import { action } from '@storybook/addon-actions'
import React from 'react'

import BackNavPage from '.'

export default {
  title: 'Templates/BackNavPage',
  component: BackNavPage
}

export const Default = () => (
  <BackNavPage onBack={action('onBack')}>Some content</BackNavPage>
)
