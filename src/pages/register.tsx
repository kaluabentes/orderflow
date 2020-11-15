import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Register from '~/components/templates/Register'
import useAuth from '~/modules/auth/hook'
import { register } from '~/modules/auth/service'
import Validation from '~/utils/services/Validation'

const INITIAL_ERROR = {
  name: null,
  district: null,
  street: null,
  number: null
}

const DataSchema = {
  name: ['required'],
  district: ['required'],
  street: ['required'],
  number: ['required']
}

function RegisterPage() {
  const [error, setError] = useState<any>(INITIAL_ERROR)
  const router = useRouter()
  const [auth] = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data) {
    const validation = Validation.make(DataSchema, data)

    if (!validation.isValid) {
      setError(validation.error)
      return
    }

    setError(INITIAL_ERROR)
    setIsLoading(true)
    await register(auth.token, data)
    router.push('/menu')
  }

  return (
    <Register
      isLoading={isLoading}
      error={error}
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
