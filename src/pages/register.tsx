import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Register from '~/components/templates/Register'
import useAuth from '~/modules/auth/hooks/useAuth'
import { register } from '~/modules/auth/service'

function RegisterPage() {
  const router = useRouter()
  const [auth] = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(values) {
    setIsLoading(true)
    await register(auth.token, values)
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
