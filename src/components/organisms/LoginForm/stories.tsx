import { action } from '@storybook/addon-actions'
import React from 'react'

import LoginForm from '.'

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm
}

export const Default = () => <LoginForm onSubmit={action('onSubmit')} />
