import React from 'react'
import useSWR from 'swr'
import {
  API_PRODUCTS_GROUPED,
  getProductsGroupedByCategories
} from '~/api/products'

import Home, { ProductGroup } from '~/components/templates/Home'
import Modals from '~/state/Modals'
import Store from '~/state/Store'

function HomePage() {
  const products = useSWR(API_PRODUCTS_GROUPED, getProductsGroupedByCategories)
  const modals = Modals.useContainer()
  const store = Store.useContainer()

  function openOrderModal(product) {
    modals.updateOptions('OrderModal', { mode: 'add', product })
    modals.open('OrderModal')
  }

  return (
    <Home
      isLoading={!products.data}
      products={(products.data as Array<ProductGroup>) || []}
      onProductClick={openOrderModal}
      store={store}
    />
  )
}

export default HomePage
