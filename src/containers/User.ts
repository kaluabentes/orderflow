import { useEffect } from 'react'
import { createContainer } from 'unstated-next'
import useStorageState from '~/utils/hooks/useLocalStorageState'

const INITIAL_STATE = {
  name: '',
  currentAddress: {
    deliveryTax: 0.0,
    street: undefined,
    number: undefined
  },
  addresses: []
}

function useUser() {
  const [user, setUser] = useStorageState(
    `${process.env.ID}.user`,
    INITIAL_STATE
  )

  return { data: user }
}

export default createContainer(useUser)
