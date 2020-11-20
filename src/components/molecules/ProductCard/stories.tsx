import React from 'react'
import StoryContainer from '~/components/utils/StoryContainer'

import ProductCard, { cardProps } from '.'

export default {
  title: 'Molecules/ProductCard',
  component: ProductCard
}

export const Default = () => (
  <StoryContainer>
    <ProductCard {...cardProps} />
  </StoryContainer>
)

export const NoImage = () => (
  <StoryContainer>
    <ProductCard {...cardProps} image={undefined} />
  </StoryContainer>
)
