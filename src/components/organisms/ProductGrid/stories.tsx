import React from 'react'

import ProductCard from '~/components/molecules/ProductCard'
import { productProps } from '~/components/molecules/ProductCard/mock'
import StoryContainer from '~/components/utils/StoryContainer'

import ProductGrid from '.'

export default {
  title: 'Organisms/ProductGrid',
  component: ProductGrid
}

const products = [
  productProps,
  productProps,
  productProps,
  productProps,
  productProps,
  productProps
]

export const Default = () => (
  <StoryContainer>
    <ProductGrid title="Hamburguers">
      {products.map(product => (
        <ProductCard {...product} />
      ))}
    </ProductGrid>
  </StoryContainer>
)

export const Loading = () => (
  <StoryContainer>
    <ProductGrid isLoading title="Hamburguers">
      {products.map(product => (
        <ProductCard {...product} />
      ))}
    </ProductGrid>
  </StoryContainer>
)
