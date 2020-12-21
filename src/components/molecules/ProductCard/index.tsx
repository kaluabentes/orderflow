import React, { useEffect, useState } from 'react'
import Truncate from 'react-truncate'

import getString from '~/i18n/getString'
import useForceUpdate from '~/utils/hooks/useForceUpdate'

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
        <Price>
          {getString('app.currency')} {price.toLocaleString()}
        </Price>
      </Content>
    </Container>
  )
}

ProductCard.Loader = Loader

export default ProductCard
