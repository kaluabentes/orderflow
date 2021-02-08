import { useEffect, useState } from 'react'

import Storage from '~/utils/services/Storage'

let prevKey

function useLocalStorageState(key, initialState?) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const storedState = Storage.getItem(key)

    if (Storage.serialize(storedState) !== Storage.serialize(state)) {
      Storage.setItem(key, state)
    }

    if (key !== prevKey) {
      Storage.removeItem(prevKey)
    }

    prevKey = key
  }, [state, key])

  return [state, setState]
}

export default useLocalStorageState
