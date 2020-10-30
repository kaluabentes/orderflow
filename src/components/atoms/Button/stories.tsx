import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button
}

export const Default = () => (
  <Button margin="100px" onClick={action('onClick')}>
    Action
  </Button>
)

export const Primary = () => (
  <Button variant="primary" onClick={action('onClick')}>
    Action
  </Button>
)

export const Info = () => (
  <Button variant="info" onClick={action('onClick')}>
    Action
  </Button>
)

export const Warning = () => (
  <Button variant="warning" onClick={action('onClick')}>
    Action
  </Button>
)
