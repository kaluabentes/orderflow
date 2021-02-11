import React, { useState, useEffect } from 'react'

import Box from '~/components/atoms/Box'
import ProductCard from '~/components/molecules/ProductCard'
import Footer from '~/components/organisms/Footer'
import OrderSummary from '~/components/organisms/OrderSummary'
import ProductGrid from '~/components/organisms/ProductGrid'
import useIsMobile from '~/utils/hooks/useIsMobile'
import Hero from '~/components/organisms/Hero'
import { MainGrid } from './styles'
import App from '../App'
import OrderSummaryContainer from '~/containers/OrderSummaryContainer'
import OrderWizardContainer from '~/containers/OrderWizardContainer'
import { StoreState } from '~/state/Store'

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
  store: StoreState
  isLoading?: boolean
  categories: Category[]
  onProductClick?: (product: Product) => void
}

function Home({ store, isLoading, categories, onProductClick }: HomeProps) {
  const isMobile = useIsMobile()
  const [isOrderFixed, setIsOrderFixed] = useState(false)

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
      <OrderWizardContainer />
    </App>
  )
}

export default Home
