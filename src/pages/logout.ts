import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useAuth from '~/modules/auth/hooks/useAuth'

function Logout() {
  const [, setAuth] = useAuth()
  const router = useRouter()

  useEffect(() => {
    setAuth({ token: null, user: null })
    router.push('/welcome')
  }, [])

  return null
}

export default Logout
