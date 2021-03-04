import { useEffect } from 'react'
import { createContainer } from 'unstated-next'
import { create } from '~/api/addresses'
import useStorageState from '~/utils/useLocalStorageState'

const INITIAL_STATE = {
  id: undefined,
  name: undefined,
  phone: undefined,
  currentAddress: undefined,
  addresses: [],
  token: undefined,
  paymentMethodId: '',
  change: ''
}

function useUser() {
  const [state, setState] = useStorageState(
    `${process.env.ID}.user`,
    INITIAL_STATE
  )

  function getCurrentAddress() {
    return state.currentAddress && state.addresses
      ? state.addresses.find(addr => addr.id === state.currentAddress)
      : {}
  }

  function setCurrentAddress(addressId) {
    setState(prev => ({ ...prev, currentAddress: addressId }))
  }

  function setPaymentMethodId(paymentMethodId) {
    setState(prev => ({ ...prev, paymentMethodId }))
  }

  function setChange(change) {
    setState(prev => ({ ...prev, change }))
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
    setState(prev => ({
      ...prev,
      id: data.id,
      name: data.name,
      phone: data.phone,
      token: data.token,
      addresses: data.addresses
    }))
  }

  return {
    state,
    setCurrentAddress,
    setPaymentMethodId,
    setChange,
    getCurrentAddress,
    addAddress,
    login
  }
}

export default createContainer(useUser)
