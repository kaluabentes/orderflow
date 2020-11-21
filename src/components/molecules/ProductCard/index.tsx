import React from 'react'
import Truncate from 'react-truncate'

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

function ProductCard({ image, title, description, price }: ProductCardProps) {
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
        <Price>{price}</Price>
      </Content>
    </Container>
  )
}

ProductCard.Loader = Loader

export default ProductCard
