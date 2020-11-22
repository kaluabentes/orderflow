import { useEffect, useState } from 'react'

import Storage from '~/utils/services/Storage'

const INITIAL_STATE = {
  isReady: false
}

function useStorageState(key, initialState?) {
  const [state, setState] = useState({ ...INITIAL_STATE, ...initialState })

  useEffect(() => {
    const localState = Storage.getItem(key)

    if (localState) {
      setState({ ...localState, isReady: true })
      return
    }

    setState({ ...state, isReady: true })
    Storage.setItem(key, state)
  }, [])

  function mixedSetState(state) {
    const newState = Storage.storeItem(key, state)
    setState(newState)
  }

  return [state, mixedSetState]
}

export default useStorageState
