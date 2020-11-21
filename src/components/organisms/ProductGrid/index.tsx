import React from 'react'
import { CommonProps } from '~/components/CommonProps'

import { Container, Title, Grid } from './styles'

interface ProductGridProps {
  title: string
  children: React.ReactNode
}

function ProductGrid({ title, children }: ProductGridProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  )
}

export default ProductGrid
