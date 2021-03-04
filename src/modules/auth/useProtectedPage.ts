import { useRouter } from 'next/router'
import { useEffect } from 'react'
import User from '~/state/User'

function useProtectedPage() {
  const router = useRouter()
  const user = User.useContainer()

  useEffect(() => {
    if (!user.state.token) {
      router.push('/')
    }
  }, [user.state.token])
}

export default useProtectedPage
