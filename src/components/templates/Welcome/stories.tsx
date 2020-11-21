import { action } from '@storybook/addon-actions'
import React from 'react'

import Welcome, { coverSrc } from '.'
import { logoSrc } from '../../atoms/Logo'

export default {
  title: 'Templates/Welcome',
  component: Welcome
}

export const Default = () => (
  <Welcome
    title="Dona Rosa Bar e Restaurante"
    coverSrc={coverSrc}
    logoSrc={logoSrc}
    onEnter={action('onEnter')}
    onVerify={action('onVerify')}
  />
)
