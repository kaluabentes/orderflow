import { createContainer } from "unstated-next"
import useStorageState from "~/utils/hooks/useStorageState"

const INITIAL_STATE = {
  name: '',
}

function useUser() {
  const [user, setUser] = useStorageState(`${process.env.ID}.user`, INITIAL_STATE)

  return { user, setUser }
}

export default createContainer(useUser)
