import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { get } from 'lodash'

import Verify from '~/components/templates/Verify'
import getString from '../i18n/getString'
import useAuth from '~/modules/auth/useAuth'
import formatPhone from '../utils/formatters/formatPhone'
import { checkCode } from '~/modules/auth/actions'

function VerifyPage() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [auth, setAuth] = useAuth()
  const phone = get(auth, 'user.phone', '')

  async function handleSubmit(code) {
    if (code.length < 4) {
      setError(getString('verifyPage.codeError'))
      return
    }

    setError('')
    setIsLoading(true)

    try {
      const user = await checkCode(setAuth, phone, code)

      if (!user.name) {
        router.push('/register')
        return
      }

      router.push('/')
    } catch (error) {
      setError(getString('verifyPage.codeError'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Verify
      error={error}
      text={
        <>
          {`${getString('app.verify.text')} `}
          <strong>{formatPhone(phone)}</strong>
        </>
      }
      onBack={() => router.push('/login')}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}

export default VerifyPage
