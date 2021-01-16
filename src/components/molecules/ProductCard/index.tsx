import React, { useEffect, useState } from 'react'

import formatMoney from '~/utils/formatters/formatMoney'

import {
  Container,
  Image,
  Content,
  Title,
  Description,
  Price,
  LoaderImage,
  LoaderDescription,
  LoaderPrice,
  LoaderTitle
} from './styles'

interface ProductCardProps {
  image?: string
  title: string
  description: string
  price: number
  onClick: () => void
}

function Loader() {
  return (
    <Container>
      <LoaderImage />
      <Content>
        <LoaderTitle />
        <LoaderDescription />
        <LoaderPrice />
      </Content>
    </Container>
  )
}

function ProductCard({
  image,
  title,
  description,
  price,
  onClick
}: ProductCardProps) {
  return (
    <Container onClick={onClick}>
      {image && <Image src={image} alt="" />}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{formatMoney(price)}</Price>
      </Content>
    </Container>
  )
}

ProductCard.Loader = Loader

export default ProductCard
