import { createContainer } from 'unstated-next'

import useLocalStorageState from '~/utils/hooks/useLocalStorageState'

export interface CartItem {
  id: string | number
  title: string
  options: string
  price: number
  quantity: number
}

export interface CartState {
  data: any
  addItem: (item: CartItem) => void
  changeQuantity: (itemId, value) => void
  removeItem: (itemId) => void
}

const INITIAL_STATE: CartItem[] = []

function useCartState(): CartState {
  const [cart, setCart] = useLocalStorageState(
    `${process.env.ID}.cart`,
    INITIAL_STATE
  )

  function addItem(item) {
    setCart(prevState => [...prevState, item])
  }

  function changeQuantity(itemId, value) {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === itemId) {
          item.quantity = Number(value)
        }

        return item
      })
    })
  }

  function removeItem(itemId) {
    setCart(prevCart =>
      prevCart.filter(item => {
        console.log(prevCart)
        console.log(item.id, itemId)
        console.log(String(item.id) !== String(itemId))
        return String(item.id) !== String(itemId)
      })
    )
  }

  return { data: cart, addItem, changeQuantity, removeItem }
}

export default createContainer(useCartState)
