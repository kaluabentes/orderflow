import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { logoSrc } from '../components/atoms/Logo'
import Home, { coverSrc } from '../components/templates/Home'
import getString from '../i18n/getString'

function HomePage() {
  const router = useRouter()

  return (
    <Home
      title={process.env.STORE_NAME}
      coverSrc={coverSrc}
      logoSrc={logoSrc}
      onEnter={() => router.push('/login')}
      onVerify={() => router.push('/availability')}
    />
  )
}

export default HomePage
