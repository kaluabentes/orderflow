import useStorageState from '~/utils/hooks/useStorageState'

const INITIAL_STATE = {
  token: null,
  user: null
}

function useAuth() {
  return useStorageState('orderflow.auth', INITIAL_STATE)
}

export default useAuth
