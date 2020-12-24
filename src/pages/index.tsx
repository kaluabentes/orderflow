import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { logoSrc } from '../components/atoms/Logo'
import Home from '~/components/templates/Home'
import useAuth from '~/modules/auth/hooks/useAuth'
import useCategories from '~/modules/products/hooks/useCategories'

function HomePage() {
  const router = useRouter()
  const [auth] = useAuth()
  const [categories, isLoading] = useCategories()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!auth.token && auth.isReady) {
      router.push('/welcome')
    }
  }, [auth])

  function getUserName() {
    return auth.user.name.split(' ')[0]
  }

  if (!auth.token) {
    return null
  }

  return (
    <Home
      isLoading={isLoading}
      categories={categories}
      logoSrc={logoSrc}
      address="Servidão Vitórias, 40"
      userName={getUserName()}
      cartCount={10}
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
