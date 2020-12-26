import { action } from '@storybook/addon-actions'
import React from 'react'

import InnerPage from '.'

export default {
  title: 'Templates/InnerPage',
  component: InnerPage
}

export const Default = () => (
  <InnerPage onBack={action('onBack')}>Some content</InnerPage>
)
