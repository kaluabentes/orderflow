import { action } from '@storybook/addon-actions'
import React from 'react'

import { logoSrc } from '~/components/atoms/Logo'
import { cardProps } from '~/components/molecules/ProductCard'

import Home from '.'

export default {
  title: 'Templates/Home',
  component: Home
}

const products = [
  cardProps,
  cardProps,
  cardProps,
  cardProps,
  cardProps,
  cardProps
]

export const Default = () => (
  <Home
    products={products}
    logoSrc={logoSrc}
    address="Servidão Vitórias, 40"
    userName="Kaluã"
    cartCount={10}
    currentPath="/"
    onAddressClick={action('onAddressClick')}
    onCartClick={action('onCartClick')}
    onNavClick={action('onNavClick')}
  />
)
