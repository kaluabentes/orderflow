import React, { createContext, useContext } from 'react'
import useStorageState from '~/utils/hooks/useStorageState'
import { Order } from './types'

const OrderStateContext = createContext(undefined)
OrderStateContext.displayName = 'OrderStateContext'

const OrderDispatchContext = createContext(undefined)
OrderDispatchContext.displayName = 'OrderDispatchContext'

const INITIAL_STATE: Order = {
  items: [],
  subtotal: 0.0,
  deliveryTax: 0.0,
  total: 0.0
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useStorageState(INITIAL_STATE)

  return (
    <OrderStateContext.Provider value={order}>
      <OrderDispatchContext.Provider value={setOrder}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderStateContext.Provider>
  )
}

export function useOrderContext() {
  const value = useContext(OrderStateContext)
  const dispatch = useContext(OrderDispatchContext)

  if (value === undefined || dispatch === undefined) {
    throw new Error('useOrderContext must be used within OrderProvider')
  }

  return [value, dispatch]
}
