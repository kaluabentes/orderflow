import { useEffect } from 'react'
import { createContainer } from 'unstated-next'
import useStorageState from '~/utils/hooks/useLocalStorageState'

const INITIAL_STATE = {
  name: '',
  currentAddress: undefined,
  addresses: []
}

function useUser() {
  const [state, setState] = useStorageState(
    `${process.env.ID}.user`,
    INITIAL_STATE
  )

  function getCurrentAddress() {
    return state.currentAddress
      ? state.addresses.find(addr => addr.id === state.currentAddress)
      : undefined
  }

  function setCurrentAddress(addressId) {
    setState(prev => ({ ...prev, currentAddress: addressId }))
  }

  function addAddress(address) {
    setState(prev => ({ ...prev, addresses: [...prev.addresses, address] }))
  }

  return { state, setCurrentAddress, getCurrentAddress, addAddress }
}

export default createContainer(useUser)
