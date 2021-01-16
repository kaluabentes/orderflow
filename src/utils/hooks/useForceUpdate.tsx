import { createContext, useContext, useState } from 'react'

const ForceUpdateStateContext = createContext(undefined)
ForceUpdateStateContext.displayName = 'ForceUpdateStateContext'

const ForceUpdateDispatchContext = createContext(undefined)
ForceUpdateDispatchContext.displayName = 'ForceUpdateDispatchContext'

export function ForceUpdateProvider({ children }) {
  const [status, setStatus] = useState(0) // 0 = pending; 1 = done.

  return (
    <ForceUpdateStateContext.Provider value={status}>
      <ForceUpdateDispatchContext.Provider value={setStatus}>
        {children}
      </ForceUpdateDispatchContext.Provider>
    </ForceUpdateStateContext.Provider>
  )
}

export function useForceUpdateContext() {
  const status = useContext(ForceUpdateStateContext)
  const setStatus = useContext(ForceUpdateDispatchContext)

  if (status === undefined || setStatus === undefined) {
    throw new Error(
      'useForceUpdateContext must be called within a ForceUpdateProvider'
    )
  }

  return [status, setStatus]
}

function useForceUpdate() {
  const [, setStatus] = useForceUpdateContext()
  return () => setStatus(1)
}

export default useForceUpdate
