import React from 'react'

import Home from '~/components/templates/Home'
import useCategories from '~/modules/categories/useCategories'
import OrderWizard from '~/state/OrderWizard'
import Store from '~/state/Store'

function HomePage() {
  const [categories, isLoading] = useCategories()
  const store = Store.useContainer()
  const orderWizard = OrderWizard.useContainer()

  function openOrderWizard(product) {
    orderWizard.selectProduct(product)
  }

  return (
    <Home
      isLoading={isLoading}
      categories={categories}
      onProductClick={openOrderWizard}
      store={store}
    />
  )
}

export default HomePage
