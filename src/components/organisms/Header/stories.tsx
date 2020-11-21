import { action } from '@storybook/addon-actions'
import React from 'react'

import { navItems } from '~/config/header'

import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header
}

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
