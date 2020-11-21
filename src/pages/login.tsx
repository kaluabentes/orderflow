import React, { useState } from 'react'

import { useRouter } from 'next/router'
import getString from '../i18n/getString'
import Login from '../components/templates/Login'
import { makeLogin } from '../modules/auth/actions'
import useAuth from '../modules/auth/hooks/useAuth'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [, setAuth] = useAuth()

  async function handleAdvance(phone) {
    if (phone.length < 11) {
      setError(getString('app.login.phoneError'))
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
        setError(getString('app.login.phoneError'))
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Login
      title={getString('app.login.title')}
      text={getString('app.login.text')}
      onBack={() => router.push('/')}
      onAdvance={handleAdvance}
      advanceLabel={getString('app.login.advanceLabel')}
      phoneLabel={getString('app.login.phoneLabel')}
      error={error}
      isLoading={isLoading}
    />
  )
}
