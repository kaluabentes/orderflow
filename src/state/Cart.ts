import { createContainer } from 'unstated-next'
import * as ObjectID from 'bson-objectid'

import useLocalStorageState from '~/utils/hooks/useLocalStorageState'

export interface CartState {
  data: any
  addItem: (item: any) => void
  changeQuantity: (itemId, value) => void
  removeItem: (itemId) => void
  editItem: (item: any) => void
}

const INITIAL_STATE = []

function useCartState(): CartState {
  const [cart, setCart] = useLocalStorageState(
    `${process.env.ID}.cart`,
    INITIAL_STATE
  )

  function addItem(item) {
    setCart(prevCart => [
      ...prevCart,
      {
        id: ObjectID.generate(),
        ...item
      }
    ])
  }

  function editItem(item) {
    setCart(prevCart =>
      prevCart.map(orderItem => ({
        ...orderItem,
        ...item
      }))
    )
  }

  function changeQuantity(itemId, value) {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === itemId) {
          item.quantity = value
        }

        return item
      })
    )
  }

  function removeItem(itemId) {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId))
  }

  return { data: cart, addItem, changeQuantity, removeItem, editItem }
}

export default createContainer(useCartState)
