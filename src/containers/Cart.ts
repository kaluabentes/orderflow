import { createContainer } from "unstated-next"
import useStorageState from "~/utils/hooks/useStorageState"

const INITIAL_STATE = []

function useCart() {
  const [cart, setCart] = useStorageState(`${process.env.ID}.cart`, INITIAL_STATE)

  return { cart, setCart }
}

export default createContainer(useCart)
