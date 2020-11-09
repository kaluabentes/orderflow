import React, { useContext } from 'react'
import { createContext, useState } from 'react'
import { merge } from 'lodash'

const AuthStateContext = createContext(undefined)
AuthStateContext.displayName = 'AuthStateContext'

const AuthDispatchContext = createContext(undefined)
AuthDispatchContext.displayName = 'AuthDispatchContext'

const INITIAL_STATE = {
  token: null,
  user: null
}

function AuthProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE)

  function dispatch(nextState) {
    setState(merge(state, nextState))
  }

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

function useAuth() {
  const state = useContext(AuthStateContext)
  const dispatch = useContext(AuthDispatchContext)

  if (!state || !dispatch) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return [state, dispatch]
}

export { AuthProvider, useAuth }
