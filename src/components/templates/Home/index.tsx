import React from 'react'
import ProductCard from '~/components/molecules/ProductCard'

import Header from '~/components/organisms/Header'
import Hero from '~/components/organisms/Hero'
import ProductGrid from '~/components/organisms/ProductGrid'
import { navItems } from '~/config/header'
import getString from '~/i18n/getString'

interface Product {
  id: string | number
  image: string
  title: string
  description: string
  price: number
}

interface Category {
  id: string | number
  name: string
  products: Product[]
}

interface HomeProps {
  categories: Category[]
  logoSrc: string
  address: string
  userName: string
  currentPath: string
  cartCount: number
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
}

function Home({
  categories,
  logoSrc,
  address,
  userName,
  currentPath,
  cartCount,
  onNavClick,
  onCartClick,
  onAddressClick
}: HomeProps) {
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
      {categories.map(category => (
        <ProductGrid key={category.id} title={category.name}>
          {category.products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductGrid>
      ))}
    </>
  )
}

export default Home
