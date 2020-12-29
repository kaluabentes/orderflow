import React from 'react'

import Heading from '.'

export default {
  title: 'Atoms/Heading',
  component: Heading
}

export const Default = () => (
  <div>
    <Heading size="xxxlarge" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading size="xxlarge" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading size="xlarge" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading size="large" as="h2">
      Pepers Restaurante
    </Heading>
    <Heading as="h2">Pepers Restaurante</Heading>
    <Heading as="h2">Pepers Restaurante</Heading>
    <Heading as="h2">Pepers Restaurante</Heading>
  </div>
)
