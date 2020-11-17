import { action } from '@storybook/addon-actions'
import React from 'react'

import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header
}

const navItems = [
  {
    label: 'Cardápio',
    path: '/menu'
  },
  {
    label: 'Sobre',
    path: '/about'
  },
  {
    label: 'Pedidos',
    path: '/orders'
  },
  {
    label: 'Perfil',
    path: '/profile'
  }
]

export const Default = () => (
  <Header
    title="Menu"
    profileText="Olá, Kaluã"
    currentPath="/menu"
    navItems={navItems}
    onNavClick={action('onNavClick')}
    onCartClick={action('onCartClick')}
    cartCount={10}
  />
)
