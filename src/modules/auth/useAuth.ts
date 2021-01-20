import useStorageState from '~/utils/hooks/useStorageState'

interface Coords {
  latitude: string
  longitude: string
}

interface User {
  name: string
  district: string
  street: string
  number: string
  complement: string
  coords: Coords
}

interface Auth {
  token?: string
  user?: User
}

const INITIAL_STATE: Auth = {
  token: null,
  user: null
}

function useAuth() {
  return useStorageState('orderflow.auth', INITIAL_STATE)
}

export default useAuth
