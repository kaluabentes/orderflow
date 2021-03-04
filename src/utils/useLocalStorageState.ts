import { useEffect, useRef, useState } from 'react'

import Storage from '~/utils/Storage'

function useLocalStorageState(key, initialState?) {
  const [state, setState] = useState(initialState)
  const keyRef = useRef()

  // Retrive stored data on start
  useEffect(() => {
    const storedState = Storage.getItem(key)

    if (storedState) {
      setState(storedState)
    }
  }, [])

  // Keep in sync
  useEffect(() => {
    const storedState = Storage.getItem(key)

    if (Storage.serialize(storedState) !== Storage.serialize(state)) {
      Storage.setItem(key, state)
    }

    if (key !== keyRef.current) {
      Storage.removeItem(keyRef.current)
    }

    keyRef.current = key
  }, [state, key])

  return [state, setState]
}

export default useLocalStorageState
