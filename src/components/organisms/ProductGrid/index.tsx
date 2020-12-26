import React, { useState } from 'react'
import IconButton from '~/components/atoms/IconButton'
import ProductCard from '~/components/molecules/ProductCard'

import { Container, Title, Grid, Header, ExpandButton } from './styles'

interface ProductGridProps {
  isLoading?: boolean
  title?: string
  children?: React.ReactNode
}

function ProductGrid({ isLoading, title, children }: ProductGridProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Container>
      {!isLoading && (
        <Header isExpanded={isExpanded}>
          <Title>{title}</Title>
          <ExpandButton
            name={isExpanded ? 'expand_less' : 'expand_more'}
            onClick={() => setIsExpanded(prev => !prev)}
          />
        </Header>
      )}
      <Grid isExpanded={isExpanded}>
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
