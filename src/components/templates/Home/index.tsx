import React, { useState, useEffect } from 'react'
import ProductCard from '~/components/molecules/ProductCard'
import Footer from '~/components/organisms/Footer'

import Header from '~/components/organisms/Header'
import Hero from '~/components/organisms/Hero'
import ProductGrid from '~/components/organisms/ProductGrid'
import { navItems } from '~/config/header'
import getString from '~/i18n/getString'
import useIsMobile from '~/utils/hooks/useIsMobile'

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
  isLoading?: boolean
  categories: Category[]
  logoSrc: string
  address: string
  userName: string
  currentPath: string
  cartCount: number
  searchValue: string
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
  onSearchClose: () => void
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Home({
  isLoading,
  categories,
  logoSrc,
  address,
  userName,
  currentPath,
  cartCount,
  searchValue,
  onAddressClick,
  onNavClick,
  onCartClick,
  onSearchClose,
  onSearchChange
}: HomeProps) {
  const isMobile = useIsMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (isMobile) {
      setIsSearchOpen(false)
    }
  }, [isMobile])

  function handleSearchClose() {
    onSearchClose()
    setIsSearchOpen(false)
  }

  return (
    <>
      <Header
        logoSrc={logoSrc}
        title={getString('app.home.title')}
        profileText={`${getString('app.home.greeting')}, ${userName}`}
        currentPath={currentPath}
        navItems={navItems}
        isSearchOpen={isSearchOpen}
        searchValue={searchValue}
        cartCount={cartCount}
        address={address}
        onAddressClick={onAddressClick}
        onNavClick={onNavClick}
        onCartClick={onCartClick}
        onSearchOpen={() => setIsSearchOpen(true)}
        onSearchClose={handleSearchClose}
        onSearchChange={onSearchChange}
      />
      <Hero
        isSearchOpen={isSearchOpen}
        logoSrc={logoSrc}
        address={address}
        onAddressClick={onAddressClick}
      />
      {isLoading ? (
        <ProductGrid isLoading />
      ) : (
        categories.map(category => (
          <ProductGrid key={category.id} title={category.name}>
            {category.products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductGrid>
        ))
      )}
      <Footer />
    </>
  )
}

export default Home
