import useLocalStorageState from '~/utils/hooks/useLocalStorageState'

const INITIAL_STATE = {
  token: null,
  user: null
}

const STORAGE_KEY = 'orderflow.auth'

function useAuth() {
  return useLocalStorageState(STORAGE_KEY, INITIAL_STATE)
}

export default useAuth
