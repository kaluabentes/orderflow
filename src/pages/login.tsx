import React from 'react'

import { useRouter } from 'next/router'
import getString from '../i18n/getString'
import Login from '../components/templates/Login'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = React.useState('')

  function handleAdvance(phone) {
    if (phone.length < 15) {
      setError(getString('app.login.phoneError'))
      return
    }

    setError('')
    // 1. Store in the context
    // 2. Send to backend
    router.push('/verify')
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
    />
  )
}
