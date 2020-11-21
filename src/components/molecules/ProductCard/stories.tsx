import React from 'react'
import StoryContainer from '~/components/utils/StoryContainer'

import ProductCard from '.'
import { productProps } from './mock'

export default {
  title: 'Molecules/ProductCard',
  component: ProductCard
}

export const Default = () => (
  <StoryContainer>
    <ProductCard {...productProps} />
  </StoryContainer>
)

export const NoImage = () => (
  <StoryContainer>
    <ProductCard {...productProps} image={undefined} />
  </StoryContainer>
)

export const Loader = () => (
  <StoryContainer>
    <ProductCard.Loader />
  </StoryContainer>
)
