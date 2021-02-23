import { useEffect } from 'react'
import { createContainer } from 'unstated-next'
import { create } from '~/api/addresses'
import useStorageState from '~/utils/hooks/useLocalStorageState'

const INITIAL_STATE = {
  id: undefined,
  name: undefined,
  phone: undefined,
  currentAddress: undefined,
  addresses: [],
  token: undefined
}

function useUser() {
  const [state, setState] = useStorageState(
    `${process.env.ID}.user`,
    INITIAL_STATE
  )

  function getCurrentAddress() {
    return state.currentAddress && state.addresses
      ? state.addresses.find(addr => addr.id === state.currentAddress)
      : undefined
  }

  function setCurrentAddress(addressId) {
    setState(prev => ({ ...prev, currentAddress: addressId }))
  }

  async function addAddress(address) {
    setState(prev => {
      const prevAddress = prev.addresses.find(addr => addr.id === address.id)

      if (prevAddress) {
        return prev
      }

      return { ...prev, addresses: [...prev.addresses, address] }
    })
  }

  function login(data) {
    setState(data)
  }

  function saveAddress() {}

  return { state, setCurrentAddress, getCurrentAddress, addAddress, login }
}

export default createContainer(useUser)
