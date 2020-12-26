import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Register from '~/storefront/templates/Register'
import { registerUser } from '~/storefront/modules/auth/actions'
import useAuth from '~/storefront/modules/auth/hooks/useAuth'

function RegisterPage() {
  const router = useRouter()
  const [auth, setAuth] = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(values) {
    setIsLoading(true)
    await registerUser(setAuth, auth.token, values)
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
