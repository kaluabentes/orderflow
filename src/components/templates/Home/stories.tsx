import React from 'react'

import Home from '.'
import products from '~/data/productsByCategories.json'

export default {
  title: 'Templates/Home',
  component: Home
}

export const Default = () => <Home products={products} />

export const Loading = () => <Home isLoading products={products} />
