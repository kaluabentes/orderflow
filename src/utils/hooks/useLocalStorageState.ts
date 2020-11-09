import { useEffect, useState } from 'react'

function useLocalStorageState(key, initialState) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const localState = localStorage.getItem(key)

    if (localState) {
      setState(JSON.parse(localState))
      return
    }

    localStorage.setItem(key, JSON.stringify(state))
  }, [])

  function handleUpdate(state) {
    localStorage.setItem(key, JSON.stringify(state))
    setState(state)
  }

  return [state, handleUpdate]
}

export default useLocalStorageState
