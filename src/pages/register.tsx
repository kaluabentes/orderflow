import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Register from '~/components/templates/Register'
import useAuth from '~/modules/auth/hook'
import { register } from '~/modules/auth/service'
import validate from '~/utils/validation/validate'

const INITIAL_ERRORS = {
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
  const [errors, setErrors] = useState<any>(INITIAL_ERRORS)
  const router = useRouter()
  const [auth] = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data) {
    const validation = validate(DataSchema, data)

    if (!validation.isValid) {
      setErrors(validation.error)
      return
    }

    setErrors(INITIAL_ERRORS)
    setIsLoading(true)
    await register(auth.token, data)
    router.push('/menu')
  }

  return (
    <Register
      isLoading={isLoading}
      errors={errors}
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
