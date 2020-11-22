import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { logoSrc } from '~/components/atoms/Logo'
import Welcome, { coverSrc } from '~/components/templates/Welcome'

function WelcomePage() {
  const router = useRouter()

  return (
    <Welcome
      title={process.env.STORE_NAME}
      coverSrc={coverSrc}
      logoSrc={logoSrc}
      onEnter={() => router.push('/login')}
      onVerify={() => router.push('/availability')}
    />
  )
}

export default WelcomePage
