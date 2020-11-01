import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { logoSrc } from '../components/atoms/Logo'
import Home, { coverSrc } from '../components/templates/Home'
import getTranslation from '../i18n/getTranslation'

function HomePage() {
  const router = useRouter()

  return (
    <Home
      title={getTranslation('app.home.title')}
      text={getTranslation('app.home.text')}
      enterText={getTranslation('app.home.enterText')}
      verifyText={getTranslation('app.home.verifyText')}
      coverSrc={coverSrc}
      logoSrc={logoSrc}
      onEnter={() => router.push('/login')}
      onVerify={() => router.push('/availability')}
    />
  )
}

export default HomePage
