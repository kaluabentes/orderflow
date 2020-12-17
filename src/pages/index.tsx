import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { logoSrc } from '../components/atoms/Logo'
import { productProps } from '~/components/molecules/ProductCard/mock'
import Home from '~/components/templates/Home'
import useAuth from '~/modules/auth/hooks/useAuth'

const products = [
  {
    id: 1,
    image:
      'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
    title: 'Frango a milanesa com delicioso e cocrante empanado',
    description:
      'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
    price: 15.5
  },
  {
    id: 2,
    image:
      'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
    title: 'Frango a milanesa com delicioso e cocrante empanado',
    description:
      'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
    price: 15.5
  },
  {
    id: 3,
    image:
      'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
    title: 'Frango a milanesa com delicioso e cocrante empanado',
    description:
      'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
    price: 15.5
  },
  {
    id: 4,
    image:
      'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
    title: 'Frango a milanesa com delicioso e cocrante empanado',
    description:
      'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
    price: 15.5
  },
  {
    id: 5,
    image:
      'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
    title: 'Frango a milanesa com delicioso e cocrante empanado',
    description:
      'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
    price: 15.5
  },
  {
    id: 6,
    image:
      'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg',
    title: 'Frango a milanesa com delicioso e cocrante empanado',
    description:
      'Um delicioso frango frito empanado com molho especial da casa servi 5 pessoas',
    price: 15.5
  }
]

const categories = [
  {
    id: 1,
    name: 'Hamburguers',
    products
  },
  {
    id: 2,
    name: 'Hamburguers',
    products
  }
]

function HomePage() {
  const router = useRouter()
  const [auth] = useAuth()

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
      categories={categories}
      logoSrc={logoSrc}
      address="Servidão Vitórias, 40"
      userName={getUserName()}
      cartCount={10}
      currentPath="/"
      onAddressClick={() => {}}
      onCartClick={() => {}}
      onNavClick={path => router.push(path)}
    />
  )
}

export default HomePage
