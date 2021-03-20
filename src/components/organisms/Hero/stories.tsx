import { action } from '@storybook/addon-actions'
import React from 'react'

import Hero, { coverSrc } from '.'
import { logoSrc } from '../../atoms/Logo'

export default {
  title: 'Organisms/Hero',
  component: Hero
}

export const Default = () => (
  <Hero
    title="Dona Rosa Bar e Restaurante"
    coverSrc={coverSrc}
    logoSrc={logoSrc}
  />
)
