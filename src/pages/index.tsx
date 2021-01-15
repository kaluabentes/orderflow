import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Home from '~/components/templates/Home'
import useAuth from '~/modules/auth/useAuth'
import useCategories from '~/modules/categories/useCategories'
import useProtectedPage from '~/modules/auth/useProtectedPage'
import useOrder from '~/modules/orders/useOrder'

function HomePage() {
  const router = useRouter()
  const [auth] = useAuth()
  const [categories, isLoading] = useCategories()
  const [searchValue, setSearchValue] = useState('')
  const [order] = useOrder()

  useProtectedPage()

  function getUserName() {
    return auth.user.name.split(' ')[0]
  }

  if (!auth.token) {
    return null
  }

  return (
    <Home
      order={order}
      isLoading={isLoading}
      categories={categories}
      logoSrc="./orderflow.svg"
      address="Servidão Vitórias, 40"
      userName={getUserName()}
      cartCount={order.items.length}
      currentPath="/"
      onAddressClick={() => {}}
      onCartClick={() => {}}
      onNavClick={path => router.push(path)}
      searchValue={searchValue}
      onSearchChange={event => setSearchValue(event.target.value)}
      onSearchClose={() => setSearchValue('')}
    />
  )
}

export default HomePage
