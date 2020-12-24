import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { logoSrc } from '~/components/atoms/Logo'

import { navItems } from '~/config/header'

import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header
}

export const Default = () => {
  const [value, setValue] = useState('')

  return (
    <Header
      title="Menu"
      profileText="Olá, Kaluã"
      currentPath="/menu"
      navItems={navItems}
      onNavClick={action('onNavClick')}
      onCartClick={action('onCartClick')}
      onAddressClick={action('onAddressClick')}
      onSearchChange={event => setValue(event.target.value)}
      onClose={() => setValue('')}
      searchValue={value}
      cartCount={10}
      logoSrc={logoSrc}
      address="Servidão Vitórias, 40"
    />
  )
}
