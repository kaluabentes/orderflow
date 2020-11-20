import React from 'react'
import Truncate from 'react-truncate'

import formatMoney from '~/utils/formatters/formatMoney'

import { Container, Image, Content, Title, Description, Price } from './styles'

interface ProductCard {
  image?: string
  title: string
  description: string
  price: number
}

export const cardProps = {
  image:
    'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
  title: 'Frango a milanesa com delicioso e cocrante empanado',
  description:
    'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
  price: 15.5
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
