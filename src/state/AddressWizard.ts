import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import User from './User'

const INITIAL_STATE = {
  isOpen: false
}

function useAddressWizard() {
  const [state, setState] = useState(INITIAL_STATE)
  const user = User.useContainer()
  const { currentAddress } = user.state

  useEffect(() => {
    if (!currentAddress) {
      setState(prev => ({ ...prev, isOpen: true }))
    } else {
      setState(prev => ({ ...prev, isOpen: false }))
    }
  }, [currentAddress])

  function open() {
    setState(prev => ({ ...prev, isOpen: true }))
  }

  function close() {
    setState(prev => ({ ...prev, isOpen: false }))
  }

  return { state, open, close }
}

export default createContainer(useAddressWizard)
