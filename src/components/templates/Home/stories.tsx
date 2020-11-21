import { action } from '@storybook/addon-actions'
import React from 'react'

import { logoSrc } from '~/components/atoms/Logo'
import { productProps } from '~/components/molecules/ProductCard/mock'

import Home from '.'

export default {
  title: 'Templates/Home',
  component: Home
}

const products = [
  productProps,
  productProps,
  productProps,
  productProps,
  productProps,
  productProps
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
