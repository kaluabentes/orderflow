import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { logoSrc } from '../components/atoms/Logo'
import { productProps } from '~/components/molecules/ProductCard/mock'
import Home from '~/components/templates/Home'
import useAuth from '~/modules/auth/hooks/useAuth'

const products = [
  productProps,
  productProps,
  productProps,
  productProps,
  productProps,
  productProps
]

function HomePage() {
  const router = useRouter()
  const [auth] = useAuth()

  useEffect(() => {
    if (!auth.token && auth.isReady) {
      router.push('/welcome')
    }
  }, [auth])

  if (!auth.token) {
    return null
  }

  return (
    <Home
      products={products}
      logoSrc={logoSrc}
      address="Servidão Vitórias, 40"
      userName="Kaluã"
      cartCount={10}
      currentPath="/"
      onAddressClick={() => {}}
      onCartClick={() => {}}
      onNavClick={path => router.push(path)}
    />
  )
}

export default HomePage
