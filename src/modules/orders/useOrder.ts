import { useState } from 'react'
import useStorageState from '~/utils/hooks/useStorageState'
import { Order } from './types'

const INITIAL_STATE: Order = {
  items: [],
  subtotal: 0.0,
  deliveryTax: 0.0,
  total: 0.0
}

function useOrder() {
  // return useStorageState('orderflow.order', INITIAL_STATE)
  return useState(INITIAL_STATE)
}

export default useOrder
