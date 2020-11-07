import React from 'react'

import { useRouter } from 'next/router'
import getString from '../i18n/getString'
import Login from '../components/templates/Login'
import { sendVerificationCode } from '../modules/auth/service'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  function handleAdvance(phone) {
    if (phone.length < 11) {
      setError(getString('app.login.phoneError'))
      return
    }

    setError('')
    setIsLoading(true)
    sendVerificationCode(phone).then(() => {
      router.push('/verify')
    })
  }

  return (
    <Login
      title={getString('app.login.title')}
      text={getString('app.login.text')}
      onBack={() => router.push('/')}
      onAdvance={handleAdvance}
      advanceLabel="Avançar"
      phoneLabel="Celular"
      error={error}
      isLoading={isLoading}
    />
  )
}
