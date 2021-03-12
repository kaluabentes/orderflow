import { createContainer } from 'unstated-next'
import * as ObjectID from 'bson-objectid'
import useLocalStorageState from '~/utils/useLocalStorageState'

const INITIAL_STATE = []

function useCartState() {
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

  function clear() {
    setCart(INITIAL_STATE)
  }

  return { data: cart, addItem, changeQuantity, removeItem, editItem, clear }
}

export default createContainer(useCartState)
