import React from 'react'

import Heading from '.'

export default {
  title: 'Atoms/Heading',
  component: Heading
}

export const Default = () => (
  <div>
    <Heading fontSize="xxxlarge" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading fontSize="xxlarge" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading fontSize="xlarge" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading fontSize="large" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading as="h2">Pepers Restaurante</Heading>
    <Heading as="h2">Pepers Restaurante</Heading>
    <Heading as="h2">Pepers Restaurante</Heading>
  </div>
)
