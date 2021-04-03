import { useState } from 'react'
import { createContainer } from 'unstated-next'

const MODALS = [
  'AddressModal',
  'OrderWizard',
  'LoginModal',
  'Confirm',
  'Prompt',
  'Alert'
]

const INITIAL_STATE = MODALS.reduce(
  (prev, curr) => ({
    ...prev,
    [curr]: { isOpen: false, options: {} }
  }),
  {}
)

function useModal() {
  const [state, setState] = useState(INITIAL_STATE)

  function open(modal, options = undefined) {
    if (options) {
      setState(prev => ({
        ...prev,
        [modal]: { ...prev[modal], isOpen: true, options }
      }))
      return
    }

    setState(prev => ({ ...prev, [modal]: { ...prev[modal], isOpen: true } }))
  }

  function close(modal, options = undefined) {
    if (options) {
      setState(prev => ({
        ...prev,
        [modal]: { ...prev[modal], isOpen: false, options }
      }))
      return
    }

    setState(prev => ({ ...prev, [modal]: { ...prev[modal], isOpen: false } }))
  }

  function isOpen(modal) {
    return state[modal].isOpen
  }

  function getOptions(modal) {
    return state[modal].options
  }

  function getOption(modal, option) {
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

      return next
    })
  }

  return { state, open, close, isOpen, getOptions, getOption, updateOptions }
}

export default createContainer(useModal)
