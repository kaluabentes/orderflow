import React from 'react'
import { CommonProps } from '~/components/CommonProps'

import { Container, Title, Grid } from './styles'

interface ProductGridProps extends CommonProps {
  title: string
}

function ProductGrid({ title, children, ...commonProps }: ProductGridProps) {
  return (
    <Container {...commonProps}>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  )
}

export default ProductGrid
