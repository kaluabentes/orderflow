import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Home from '~/components/templates/Home'
import useAuth from '~/modules/auth/useAuth'
import useCategories from '~/modules/categories/useCategories'
import useProtectedPage from '~/modules/auth/useProtectedPage'
import useOrder from '~/modules/orders/useOrder'
import getInitialState from '~/components/organisms/OrderWizard/getInitialState'
import getOrderItem from '~/components/organisms/OrderWizard/getOrderItem'
import { OPTIONS } from '~/modules/products/mocks'

function HomePage() {
  const router = useRouter()
  const [auth] = useAuth()
  const [categories, isLoading] = useCategories()
  const [searchValue, setSearchValue] = useState('')
  const [order, setOrder] = useOrder()
  const [orderWizardProduct, setOrderWizardProduct] = useState(undefined)
  const [options, setOptions] = useState([])
  const [orderValue, setOrderValue] = React.useState<any>(undefined)
  const [orderQuantity, setOrderQuantity] = React.useState(1)
  const [isOrderWizardOpen, setIsOrderWizardOpen] = useState(false)

  // useProtectedPage()

  useEffect(() => {
    if (!orderWizardProduct) {
      setIsOrderWizardOpen(false)
    } else {
      setIsOrderWizardOpen(true)
    }
  }, [orderWizardProduct])

  useEffect(() => {
    if (orderWizardProduct) {
      setOptions(OPTIONS)
      setOrderValue(getInitialState(OPTIONS))
    }
  }, [orderWizardProduct])

  function getUserName() {
    return 'Kaluã'
    return auth.user.name.split(' ')[0]
  }

  function addOrder() {
    setOrder({
      ...order,
      items: [
        ...order.items,
        getOrderItem(orderWizardProduct, options, orderValue, orderQuantity)
      ]
    })
    closeOrderWizard()
  }

  function closeOrderWizard() {
    setIsOrderWizardOpen(false)
  }

  function openOrderWizard(product) {
    setOrderWizardProduct(product)
    setIsOrderWizardOpen(true)
  }

  // if (!auth.token) {
  //   return null
  // }

  return (
    <Home
      options={options}
      isOrderWizardOpen={isOrderWizardOpen}
      orderWizardValue={orderValue}
      orderWizardQuantity={orderQuantity}
      orderWizardProduct={orderWizardProduct}
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
      onOrderWizardQuantityChange={value => setOrderQuantity(value)}
      onOrderWizardConfirm={addOrder}
      onOrderWizardClose={() => closeOrderWizard()}
      onOrderWizardChange={(optionId, optionValue) =>
        setOrderValue(prevValue => ({
          ...prevValue,
          [optionId]: optionValue
        }))
      }
      onSearchChange={event => setSearchValue(event.target.value)}
      onSearchClose={() => setSearchValue('')}
      onProductClick={openOrderWizard}
    />
  )
}

export default HomePage
