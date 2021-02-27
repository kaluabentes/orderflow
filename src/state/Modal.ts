import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import User from './User'

const MODALS = ['AddressModal', 'OrderModal', 'LoginModal', 'Confirm', 'Prompt']

const INITIAL_STATE = MODALS.reduce(
  (prev, curr) => ({
    ...prev,
    [curr]: { isOpen: false, options: {} }
  }),
  {}
)

function useModal() {
  const [state, setState] = useState(INITIAL_STATE)

  function open(modal, options = {}) {
    setState(prev => ({ ...prev, [modal]: { isOpen: true, options } }))
  }

  function close(modal, options = {}) {
    setState(prev => ({
      ...prev,
      [modal]: {
        isOpen: false,
        options: { ...prev[modal].options, ...options }
      }
    }))
  }

  function isOpen(modal) {
    return state[modal].isOpen
  }

  function getOptions(modal) {
    return state[modal].options
  }

  function getOption(modal, option) {
    console.log(state[modal].options)
    return state[modal].options[option]
  }

  function updateOptions(modal, options) {
    setState(prev => {
      const next = {
        ...prev,
        [modal]: {
          ...prev[modal],
          isOpen: options.isOpen || prev[modal].isOpen,
          options: { ...prev[modal].options, ...options }
        }
      }
      console.log(next)
      return next
    })
  }

  return { state, open, close, isOpen, getOptions, getOption, updateOptions }
}

export default createContainer(useModal)
