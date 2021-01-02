import React, { useState, useEffect } from 'react'
import Box from '~/components/atoms/Box'
import ProductCard from '~/components/molecules/ProductCard'
import Footer from '~/components/organisms/Footer'

import Header from '~/components/organisms/Header'
import Hero from '~/components/organisms/Hero'
import OrderSummary from '~/components/organisms/OrderSummary'
import ProductGrid from '~/components/organisms/ProductGrid'
import { navItems } from '~/config/navigation'
import getString from '~/i18n/getString'
import useIsMobile from '~/utils/hooks/useIsMobile'

import { MainGrid } from './styles'

const ORDER_FIXED_OFFSET = 20

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
  coverSrc?: string
  address: string
  userName: string
  currentPath: string
  cartCount: number
  searchValue?: string
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
  onSearchClose?: () => void
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Home({
  isLoading,
  categories,
  logoSrc,
  coverSrc,
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
  const [isOrderFixed, setIsOrderFixed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > ORDER_FIXED_OFFSET) {
        setIsOrderFixed(true)
        return
      }

      setIsOrderFixed(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      setIsSearchOpen(false)
    }
  }, [isMobile])

  function handleSearchClose() {
    onSearchClose()
    setIsSearchOpen(false)
  }

  function renderOrderSummary(props = {}) {
    return (
      <OrderSummary
        products={[
          {
            id: 1,
            description: '1x Sextou - Quarterão - apenas sanduíche',
            price: 20.9,
            quantity: 3
          },
          {
            id: 2,
            description: '1x Sextou - Quarterão - apenas sanduíche',
            price: 21.9,
            quantity: 2
          },
          {
            id: 3,
            description: '1x Sextou - Quarterão - apenas sanduíche',
            price: 21.9,
            quantity: 10
          }
        ]}
        subtotal={12.9}
        deliveryFee={12.49}
        total={25.39}
        onAdvance={() => alert('onAdvance')}
        onEdit={() => alert('onEdit')}
        onRemove={() => alert('onRemove')}
        onQuantityChange={(productId, value) =>
          alert(`onQuantityChange - ${productId} - ${value}`)
        }
        {...props}
      />
    )
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

      <MainGrid>
        {isLoading ? (
          <>
            <Box flex="1" margin={!isMobile ? '0 30px 0 0' : null}>
              <ProductGrid isLoading />
            </Box>
            {!isMobile && <OrderSummary.Loader />}
          </>
        ) : (
          <>
            <Box flex="1" margin={!isMobile ? '0 30px 0 0' : null}>
              {categories.map(category => (
                <ProductGrid key={category.id} title={category.name}>
                  {category.products.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </ProductGrid>
              ))}
            </Box>
            {!isMobile && (
              <>
                {renderOrderSummary()}
                {isOrderFixed && renderOrderSummary({ isFixed: true })}
              </>
            )}
          </>
        )}
      </MainGrid>
      <Footer />
    </>
  )
}

export default Home
