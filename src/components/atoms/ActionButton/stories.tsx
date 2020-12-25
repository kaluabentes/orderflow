import { action } from '@storybook/addon-actions'
import React from 'react'

import ActionButton from '.'

export default {
  title: 'Atoms/ActionButton',
  component: ActionButton
}

const commonProps = {
  onClick: action('onClick')
}

export const Primary = () => (
  <ActionButton {...commonProps} variant="primary">
    Edit
  </ActionButton>
)

export const Default = () => (
  <ActionButton {...commonProps} variant="default">
    Remove
  </ActionButton>
)
