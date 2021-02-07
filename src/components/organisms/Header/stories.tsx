import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { logoSrc } from '~/components/atoms/Logo'

import { navItems } from '~/config/navigation'

import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header
}

export const Default = () => {
  const [value, setValue] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <Header
      title="Menu"
      userName="Kaluã"
      pathname="/menu"
      navItems={navItems}
      onNavClick={action('onNavClick')}
      onCartClick={action('onCartClick')}
      onAddressClick={action('onAddressClick')}
      onSearchChange={event => setValue(event.target.value)}
      search={value}
      cartCount={10}
      logoSrc={logoSrc}
      address="Servidão Vitórias, 40"
      isSearchOpen={isSearchOpen}
      onSearchOpen={() => setIsSearchOpen(true)}
      onSearchClose={() => {
        setValue('')
        setIsSearchOpen(false)
      }}
      onLogin={() => action('onLogin')}
    />
  )
}
