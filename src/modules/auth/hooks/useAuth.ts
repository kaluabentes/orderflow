import useStorageState from '~/utils/hooks/useStorageState'

const INITIAL_STATE = {
  token: null,
  user: null
}

const STORAGE_KEY = 'orderflow.auth'

function useAuth() {
  return useStorageState(STORAGE_KEY, INITIAL_STATE)
}

export default useAuth
