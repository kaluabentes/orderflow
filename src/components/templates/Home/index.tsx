import React, { useState, useEffect } from 'react'
import Box from '~/components/atoms/Box'
import ProductCard from '~/components/molecules/ProductCard'
import Footer from '~/components/organisms/Footer'

import OrderSummary from '~/components/organisms/OrderSummary'
import OrderWizard from '~/components/organisms/OrderWizard'
import ProductGrid from '~/components/organisms/ProductGrid'
import { Order } from '~/modules/orders/types'
import { Option } from '~/modules/products/types'
import useIsMobile from '~/utils/hooks/useIsMobile'
import Hero from '~/components/organisms/Hero'

import { MainGrid } from './styles'
import App from '../App'
import Store from '~/state/Store'
import User from '~/state/User'
import OrderSummaryContainer from '~/containers/OrderSummary'

const ORDER_FIXED_OFFSET = 416

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
  hasRequiredEmpty?: boolean
  options?: Option[]
  isOrderWizardOpen?: boolean
  orderWizardValue?: any
  orderWizardQuantity?: number
  orderWizardProduct?: Product
  isLoading?: boolean
  order?: any
  categories: Category[]
  onOrderSummaryQuantityChange?: (productId: string | number) => void
  onOrderSummaryRemove?: (productId: string | number) => void
  onOrderSummaryEdit?: (productId: string | number) => void
  onOrderSummaryConfirm?: () => void
  onOrderWizardQuantityChange?: (value) => void
  onOrderWizardConfirm?: (data: any) => void
  onOrderWizardClose?: () => void
  onOrderWizardChange?: (optionId: any, optionValue: any) => void
  onSearchClose?: () => void
  onProductClick?: (product: Product) => void
}

function getOrderTotalPrice(cart, deliveryTax = undefined) {
  const total = cart.reduce((prev, curr) => prev + curr.price, 0)

  if (deliveryTax) {
    return total + deliveryTax
  }

  return total
}

function Home({
  hasRequiredEmpty,
  options,
  isOrderWizardOpen,
  orderWizardValue,
  orderWizardQuantity,
  orderWizardProduct,
  isLoading,
  order,
  categories,
  onSearchClose,
  onOrderSummaryQuantityChange,
  onOrderSummaryRemove,
  onOrderSummaryConfirm,
  onOrderSummaryEdit,
  onOrderWizardQuantityChange,
  onOrderWizardConfirm,
  onOrderWizardClose,
  onOrderWizardChange,
  onProductClick
}: HomeProps) {
  const isMobile = useIsMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isOrderFixed, setIsOrderFixed] = useState(false)
  const store = Store.useContainer()
  const user = User.useContainer()
  const { deliveryTax } = user.data.currentAddress

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > ORDER_FIXED_OFFSET - 75) {
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

  function renderOrderSummary(isFixed = false) {
    return <OrderSummaryContainer isFixed={isFixed} />
  }

  return (
    <App title="Home">
      <Hero
        title={store.data.name}
        coverSrc={store.data.cover}
        logoSrc={store.data.logo}
        onEnter={() => console.log('onEnter')}
        onVerify={() => console.log('onVerify')}
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
                {isOrderFixed && renderOrderSummary(true)}
              </>
            )}
          </>
        )}
      </MainGrid>
      <Footer />
      <OrderWizard
        hasRequiredEmpty={hasRequiredEmpty}
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
    </App>
  )
}

export default Home
