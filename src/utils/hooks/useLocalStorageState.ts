import { useEffect, useState } from 'react'

import Storage from '~/utils/services/Storage'

function useLocalStorageState(key, initialState?) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const localState = Storage.getItem(key)

    if (localState) {
      setState(localState)
      return
    }

    Storage.setItem(key, state)
  }, [])

  function mixedSetState(state) {
    const newState = Storage.storeData(key, state)
    setState(newState)
  }

  return [state, mixedSetState]
}

export default useLocalStorageState
