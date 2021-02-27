import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Register from '~/components/templates/Register'
import { registerUser } from '~/modules/auth/actions'
import useAuth from '~/modules/auth/useAuth'
import Location from '~/utils/Location'

function RegisterPage() {
  const router = useRouter()
  const [auth, setAuth] = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null
  })

  useEffect(() => {
    Location.getPosition().then((position: any) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }, [])

  async function handleSubmit(data) {
    setIsLoading(true)
    await registerUser(setAuth, auth.token, { ...data, coords })
    router.push('/')
  }

  return (
    <Register
      isLoading={isLoading}
      onBack={() => router.push('/verify')}
      onSubmit={handleSubmit}
      districts={[
        {
          id: '1',
          name: 'Campeche'
        },
        {
          id: '2',
          name: 'Flores'
        }
      ]}
    />
  )
}

export default RegisterPage
