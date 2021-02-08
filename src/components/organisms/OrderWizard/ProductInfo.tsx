import React from 'react'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Logo from '~/components/atoms/Logo'
import Paragraph from '~/components/atoms/Paragraph'
import { Product } from '~/modules/products/types'
import formatMoney from '~/utils/formatters/formatMoney'

interface ProductInfoProps {
  product: Product | any
}

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <Box margin="0 0 20px 0">
      <Box alignItems="center" margin="0 0 30px 0">
        <Logo src={product.image} />
      </Box>
      <Heading fontSize="large" as="h3" margin="0 0 10px 0">
        {product.title}
      </Heading>
      <Paragraph variant="muted" margin="0 0 10px 0">
        {product.description}
      </Paragraph>
    </Box>
  )
}

export default ProductInfo
