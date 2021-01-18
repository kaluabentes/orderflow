import React, { useState, useEffect } from 'react'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import ProductCard from '~/components/molecules/ProductCard'
import Footer from '~/components/organisms/Footer'

import Header from '~/components/organisms/Header'
import OrderSummary from '~/components/organisms/OrderSummary'
import OrderWizard, { Option } from '~/components/organisms/OrderWizard'
import ProductGrid from '~/components/organisms/ProductGrid'
import { navItems } from '~/config/navigation'
import getString from '~/i18n/getString'
import { Order } from '~/modules/orders/types'
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
  options: Option[]
  isOrderWizardOpen?: boolean
  orderWizardValue: any
  orderWizardQuantity?: number
  orderWizardProduct: Product
  isLoading?: boolean
  order: Order
  categories: Category[]
  logoSrc: string
  coverSrc?: string
  address: string
  userName: string
  currentPath: string
  cartCount: number
  searchValue?: string
  onOrderSummaryQuantityChange?: (productId: string | number) => void
  onOrderSummaryRemove?: (productId: string | number) => void
  onOrderSummaryEdit?: (productId: string | number) => void
  onOrderSummaryConfirm?: () => void
  onOrderWizardQuantityChange?: (value) => void
  onOrderWizardConfirm?: () => void
  onOrderWizardClose?: () => void
  onOrderWizardChange?: (optionId: any, optionValue: any) => void
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
  onSearchClose?: () => void
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onProductClick: (product: Product) => void
}

function Home({
  options,
  isOrderWizardOpen,
  orderWizardValue,
  orderWizardQuantity,
  orderWizardProduct,
  isLoading,
  order,
  categories,
  logoSrc,
  address,
  userName,
  currentPath,
  cartCount,
  searchValue,
  onOrderSummaryQuantityChange,
  onOrderSummaryRemove,
  onOrderSummaryConfirm,
  onOrderSummaryEdit,
  onOrderWizardQuantityChange,
  onOrderWizardConfirm,
  onOrderWizardClose,
  onOrderWizardChange,
  onAddressClick,
  onNavClick,
  onCartClick,
  onSearchClose,
  onSearchChange,
  onProductClick
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
        items={order.items}
        subtotal={order.subtotal}
        deliveryTax={order.deliveryTax}
        total={order.total}
        onConfirm={onOrderSummaryConfirm}
        onEdit={onOrderSummaryEdit}
        onRemove={onOrderSummaryRemove}
        onQuantityChange={onOrderSummaryQuantityChange}
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
                    <ProductCard
                      onClick={() => onProductClick(product)}
                      key={product.id}
                      {...product}
                    />
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
      <OrderWizard
        quantity={orderWizardQuantity}
        onQuantityChange={onOrderWizardQuantityChange}
        isOpen={isOrderWizardOpen}
        onClose={onOrderWizardClose}
        value={orderWizardValue}
        product={orderWizardProduct}
        options={options}
        onConfirm={onOrderWizardConfirm}
        onChange={onOrderWizardChange}
      />
    </>
  )
}

export default Home
