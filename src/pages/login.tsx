import React, { useState } from 'react'

import { useRouter } from 'next/router'
import getString from '../i18n/getString'
import Login from '~/components/templates/Login'
import { makeLogin } from '~/modules/auth/actions'
import useAuth from '~/modules/auth/useAuth'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [, setAuth] = useAuth()

  async function handleSubmit({ phone }) {
    if (phone.length < 11) {
      setError(getString('loginPage.phoneError'))
      return
    }

    setError('')
    setIsLoading(true)

    try {
      await makeLogin(setAuth, phone)
      router.push('/verify')
    } catch (error) {
      const { code } = error.response.data.error

      if (code === 60200) {
        setError(getString('loginPage.phoneError'))
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Login
      onBack={() => router.push('/')}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  )
}
