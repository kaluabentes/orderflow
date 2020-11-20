import React from 'react'
import ProductCard, { cardProps } from '~/components/molecules/ProductCard'
import StoryContainer from '~/components/utils/StoryContainer'

import ProductGrid from '.'

export default {
  title: 'Organisms/ProductGrid',
  component: ProductGrid
}

const products = [
  cardProps,
  cardProps,
  cardProps,
  cardProps,
  cardProps,
  cardProps
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
