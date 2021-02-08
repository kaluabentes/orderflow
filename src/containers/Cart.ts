import { createContainer } from 'unstated-next'

import useLocalStorageState from '~/utils/hooks/useLocalStorageState'

const INITIAL_STATE = []

function useCart() {
  const [cart, setCart] = useLocalStorageState(
    `${process.env.ID}.cart`,
    INITIAL_STATE
  )

  function addItem(item) {
    setCart(prevState => [...prevState, item])
  }

  return { data: cart, addItem }
}

export default createContainer(useCart)
