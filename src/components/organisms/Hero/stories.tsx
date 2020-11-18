import { action } from '@storybook/addon-actions'
import React from 'react'

import { logoSrc } from '~/components/atoms/Logo'

import Hero from '.'

export default {
  title: 'Organisms/Hero',
  component: Hero
}

export const Default = () => (
  <Hero
    logoSrc={logoSrc}
    address="Servidão Vitórias, 40"
    onAddressClick={action('onAddressClick')}
  />
)
