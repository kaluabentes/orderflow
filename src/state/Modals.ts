import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import User from './User'

const MODALS = ['AddressModal', 'OrderModal', 'LoginModal']

const INITIAL_STATE = MODALS.reduce(
  (prev, curr) => ({
    ...prev,
    [curr]: { isOpen: false, options: {} }
  }),
  {}
)

function useModals() {
  const [state, setState] = useState(INITIAL_STATE)

  function open(modal, options = {}) {
    setState(prev => ({ ...prev, [modal]: { isOpen: true, options } }))
  }

  function close(modal, options = {}) {
    setState(prev => ({ ...prev, [modal]: { isOpen: false, options } }))
  }

  function isOpen(modal) {
    return state[modal].isOpen
  }

  function getOptions(modal) {
    return state[modal].options
  }

  function updateOptions(modal, options) {
    setState(prev => ({
      ...prev,
      [modal]: {
        ...prev[modal],
        options: { ...prev[modal].options, ...options }
      }
    }))
  }

  return { state, open, close, isOpen, getOptions, updateOptions }
}

export default createContainer(useModals)
