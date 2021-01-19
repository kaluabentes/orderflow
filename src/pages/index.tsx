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
  const [orderWizardValue, setOrderWizardValue] = React.useState<any>(undefined)
  const [options, setOptions] = useState([])
  const [orderQuantity, setOrderQuantity] = React.useState(1)
  const [isOrderWizardOpen, setIsOrderWizardOpen] = useState(false)
  const [showRequiredError, setShowRequiredError] = useState(false)

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
      setOrderWizardValue(getInitialState(OPTIONS))
    }
  }, [orderWizardProduct])

  function getUserName() {
    return 'Kaluã'
    return auth.user.name.split(' ')[0]
  }

  function hasRequiredEmpty() {
    return Object.keys(orderWizardValue).reduce((prev, key) => {
      const option = options.find(opt => opt.id === key)

      function hasAnyEmpty() {
        if (option.type === 'check') {
          const totalChoices = orderWizardValue[key].length
          return !totalChoices && totalChoices < option.limit
        }
        if (option.type === 'radio') {
          return !orderWizardValue[key]
        }
        if (option.type === 'amount') {
          const totalChoices = Object.keys(orderWizardValue[key]).reduce(
            (prev, inputKey) => prev + orderWizardValue[key][inputKey],
            0
          )
          return Object.keys(orderWizardValue[key]).reduce((prev, inputKey) => {
            if (
              !orderWizardValue[key][inputKey] &&
              totalChoices < option.limit
            ) {
              return true
            }

            if (prev) {
              return prev
            }

            return false
          }, false)
        }
      }

      if (option.required) {
        return hasAnyEmpty()
      }

      if (prev) {
        return prev
      }

      return false
    }, false)
  }

  function confirmOrderWizard() {
    if (hasRequiredEmpty()) {
      setShowRequiredError(true)
      return
    }

    setShowRequiredError(false)
    setOrder({
      ...order,
      items: [
        ...order.items,
        getOrderItem(
          orderWizardProduct,
          options,
          orderWizardValue,
          orderQuantity
        )
      ]
    })
    closeOrderWizard()
  }

  function closeOrderWizard() {
    setOrderWizardValue(undefined)
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
      hasRequiredEmpty={showRequiredError}
      options={options}
      isOrderWizardOpen={isOrderWizardOpen}
      orderWizardValue={orderWizardValue}
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
      onOrderWizardConfirm={confirmOrderWizard}
      onOrderWizardClose={() => closeOrderWizard()}
      onOrderWizardChange={(optionId, optionValue) =>
        setOrderWizardValue(prevValue => ({
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
