import { createContainer } from 'unstated-next'
import { useState } from 'react'

const INITIAL_STATE = {
  isOpen: false,
  product: undefined
}

function useOrderWizard() {
  const [state, setState] = useState(INITIAL_STATE)

  function open() {
    setState(prev => ({ ...prev, isOpen: true }))
  }

  function close() {
    setState(prev => ({ ...prev, isOpen: false }))
  }

  function selectProduct(product) {
    setState(prev => ({ ...prev, isOpen: true, product }))
  }

  return { data: state, open, close, selectProduct }
}

export default createContainer(useOrderWizard)
