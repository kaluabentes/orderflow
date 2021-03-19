import React, { useEffect, useState } from 'react'
import { getProductsGroupedByCategories } from '~/api/products'

import Home, { ProductGroup } from '~/components/templates/Home'
import Modals from '~/state/Modal'
import Store from '~/state/Store'

const INITIAL_STATE = {
  data: [],
  isLoading: false
}

function HomePage() {
  const [products, setProducts] = useState(INITIAL_STATE)
  const modals = Modals.useContainer()
  const store = Store.useContainer()

  useEffect(() => {
    setProducts(prev => ({ ...prev, isLoading: true }))
    getProductsGroupedByCategories().then((response: any) => {
      setProducts({
        data: response.data,
        isLoading: false
      })
    })
  }, [])

  function openOrderModal(product) {
    modals.open('OrderModal', { mode: 'add', product })
  }

  return (
    <Home
      isLoading={products.isLoading}
      products={products.data}
      onProductClick={openOrderModal}
      store={store.data}
    />
  )
}

export default HomePage
