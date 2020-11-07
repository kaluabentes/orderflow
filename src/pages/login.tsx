import React, { useState } from 'react'

import { useRouter } from 'next/router'
import getString from '../i18n/getString'
import Login from '../components/templates/Login'
import { sendVerificationCode } from '../modules/auth/service'
import formatPhone from '../utils/formatters/formatPhone'
import filterNumber from '../utils/filters/filterNumber'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [phone, setPhone] = useState('')

  async function handleAdvance() {
    if (phone.length < 11) {
      setError(getString('app.login.phoneError'))
      return
    }

    setError('')
    setIsLoading(true)

    try {
      await sendVerificationCode(phone)
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
      phone={formatPhone(phone)}
      onPhoneChange={event => setPhone(filterNumber(event.target.value))}
      onBack={() => router.push('/')}
      onAdvance={handleAdvance}
      advanceLabel={getString('app.login.advanceLabel')}
      phoneLabel={getString('app.login.phoneLabel')}
      error={error}
      isLoading={isLoading}
    />
  )
}
