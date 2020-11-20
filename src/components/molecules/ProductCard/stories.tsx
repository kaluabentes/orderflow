import React from 'react'
import StoryContainer from '~/components/utils/StoryContainer'

import ProductCard from '.'

export default {
  title: 'Molecules/ProductCard',
  component: ProductCard
}

const cardProps = {
  image:
    'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
  title: 'Frango a milanesa com delicioso e cocrante empanado',
  description:
    'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
  price: 15.5
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
