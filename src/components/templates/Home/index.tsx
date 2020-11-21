import React from 'react'
import ProductCard from '~/components/molecules/ProductCard'

import Header from '~/components/organisms/Header'
import Hero from '~/components/organisms/Hero'
import ProductGrid from '~/components/organisms/ProductGrid'
import { navItems } from '~/config/header'
import getString from '~/i18n/getString'

function Home({
  products,
  logoSrc,
  address,
  userName,
  currentPath,
  cartCount,
  onNavClick,
  onCartClick,
  onAddressClick
}) {
  return (
    <>
      <Header
        title={getString('app.home.title')}
        profileText={`${getString('app.home.greeting')}, ${userName}`}
        currentPath={currentPath}
        navItems={navItems}
        onNavClick={onNavClick}
        onCartClick={onCartClick}
        cartCount={cartCount}
      />
      <Hero
        logoSrc={logoSrc}
        address={address}
        onAddressClick={onAddressClick}
      />
      <ProductGrid title="Hamburguers">
        {products.map(product => (
          <ProductCard {...product} />
        ))}
      </ProductGrid>
    </>
  )
}

export default Home
