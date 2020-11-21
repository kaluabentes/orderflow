import React from 'react'
import ProductCard from '~/components/molecules/ProductCard'

import { Container, Title, Grid } from './styles'

interface ProductGridProps {
  isLoading?: boolean
  title: string
  children: React.ReactNode
}

function ProductGrid({ isLoading, title, children }: ProductGridProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {isLoading ? (
          <>
            <ProductCard.Loader />
            <ProductCard.Loader />
            <ProductCard.Loader />
            <ProductCard.Loader />
          </>
        ) : (
          children
        )}
      </Grid>
    </Container>
  )
}

export default ProductGrid
