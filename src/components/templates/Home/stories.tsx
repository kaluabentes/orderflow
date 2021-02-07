import { action } from '@storybook/addon-actions'
import React from 'react'

import { logoSrc } from '~/components/atoms/Logo'

import Home from '.'
import { categories } from './mock'

export default {
  title: 'Templates/Home',
  component: Home
}

export const Default = () => (
  <Home
    categories={categories}
  />
)

export const Loading = () => (
  <Home
    isLoading
    categories={categories}
  />
)
