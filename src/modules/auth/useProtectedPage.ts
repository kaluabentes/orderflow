import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuth from './useAuth'

function useProtectedPage() {
  const router = useRouter()
  const [auth] = useAuth()

  useEffect(() => {
    if (!auth.token && auth.isReady) {
      router.push('/welcome')
    }
  }, [auth])
}

export default useProtectedPage
