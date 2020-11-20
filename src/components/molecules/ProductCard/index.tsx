import React from 'react'
import Truncate from 'react-truncate'

import formatMoney from '~/utils/formatters/formatMoney'

import { Container, Image, Content, Title, Description, Price } from './styles'

interface ProductCard {
  image?: string
  title: string
  description: string
  price: string
}

function ProductCard({ image, title, description, price }: ProductCard) {
  return (
    <Container>
      {image && <Image src={image} alt="" />}
      <Content>
        <Title>
          <Truncate lines={2}>{title}</Truncate>
        </Title>
        <Description>
          <Truncate lines={2}>{description}</Truncate>
        </Description>
        <Price>{formatMoney(price)}</Price>
      </Content>
    </Container>
  )
}

export default ProductCard
