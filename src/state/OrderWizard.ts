import { createContainer } from 'unstated-next'
import { useState } from 'react'

const INITIAL_STATE = {
  isOpen: false,
  product: undefined,
  mode: 'add',
  itemId: undefined
}

function useOrderWizard() {
  const [state, setState] = useState(INITIAL_STATE)

  function open() {
    setState(prev => ({ ...prev, isOpen: true }))
  }

  function close() {
    setState(prev => ({
      ...prev,
      isOpen: false,
      itemId: undefined
    }))
  }

  function selectProduct(product) {
    setState(prev => ({ ...prev, product }))
  }

  function selectMode(mode, itemId?) {
    setState(prev => ({ ...prev, mode, itemId }))
  }

  return { data: state, open, close, selectProduct, selectMode }
}

export default createContainer(useOrderWizard)
