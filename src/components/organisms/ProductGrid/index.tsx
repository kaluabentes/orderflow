import React, { useState } from 'react'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
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
        <Header
          onClick={() => setIsExpanded(prev => !prev)}
          isExpanded={isExpanded}
        >
          <Heading fontSize="large" margin="0 0 20px 0" as="h3">
            {title}
          </Heading>
          <Icon
            color="#bbb"
            fontSize="30px"
            name={isExpanded ? 'expand_less' : 'expand_more'}
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
