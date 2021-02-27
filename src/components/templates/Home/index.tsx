import React, { useState, useEffect } from 'react'

import Box from '~/components/atoms/Box'
import ProductCard from '~/components/molecules/ProductCard'
import Footer from '~/components/organisms/Footer'
import OrderSummary from '~/components/organisms/OrderSummary'
import ProductGrid from '~/components/organisms/ProductGrid'
import useIsMobile from '~/utils/useIsMobile'
import Hero from '~/components/organisms/Hero'
import { MainGrid } from './styles'
import App from '../App'
import OrderSummaryContainer from '~/containers/OrderSummaryContainer'
import { StoreState } from '~/state/Store'
import { MOBILE_BREAKPOINT } from '~/components/organisms/Header/constants'
import Responsive from '~/components/utils/Responsive'
import getString from '~/i18n/getString'

const ORDER_FIXED_OFFSET = 350.5

interface Product {
  id: string | number
  image: string
  title: string
  description: string
  price: number
}

export interface ProductGroup {
  id: string | number
  category: string
  products: Product[]
}

interface HomeProps {
  store?: StoreState
  isLoading?: boolean
  products: ProductGroup[]
  onProductClick?: (product: Product) => void
}

function Home({ store, isLoading, products, onProductClick }: HomeProps) {
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
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

  return (
    <App title={getString('nav.home')}>
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
            <Box width="100%" margin={!isMobile ? '0 30px 0 0' : null}>
              {products.map(productGroup => (
                <ProductGrid
                  key={productGroup.id}
                  title={productGroup.category}
                >
                  {productGroup.products.map(product => (
                    <ProductCard
                      onClick={() => onProductClick(product)}
                      key={product.id}
                      {...product}
                    />
                  ))}
                </ProductGrid>
              ))}
            </Box>
            <Responsive width="100%" maxWidth="400px" hideMaxWidth={1024}>
              <OrderSummaryContainer isFixed={isOrderFixed} />
            </Responsive>
          </>
        )}
      </MainGrid>
      <Footer />
    </App>
  )
}

export default Home
