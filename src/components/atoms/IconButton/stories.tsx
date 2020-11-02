import { action } from '@storybook/addon-actions'
import React from 'react'

import IconButton from '.'

export default {
  title: 'Atoms/IconButton',
  component: IconButton
}

export const Default = () => (
  <IconButton name="arrow_back" onClick={action('onClick')} />
)
