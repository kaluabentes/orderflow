import React from 'react'
import useSWR from 'swr'
import {
  API_PRODUCTS_GROUPED,
  getProductsGroupedByCategories
} from '~/api/products'

import Home, { ProductGroup } from '~/components/templates/Home'
import OrderWizard from '~/state/OrderWizard'
import Store from '~/state/Store'

function HomePage() {
  const products = useSWR(API_PRODUCTS_GROUPED, getProductsGroupedByCategories)
  const store = Store.useContainer()
  const orderWizard = OrderWizard.useContainer()

  function openOrderWizard(product) {
    orderWizard.selectMode('add')
    orderWizard.selectProduct(product)
    orderWizard.open()
  }

  return (
    <Home
      isLoading={!products.data}
      products={(products.data as Array<ProductGroup>) || []}
      onProductClick={openOrderWizard}
      store={store}
    />
  )
}

export default HomePage
