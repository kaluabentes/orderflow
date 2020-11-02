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
      enterLabel={getTranslation('app.home.enterLabel')}
      verifyLabel={getTranslation('app.home.verifyLabel')}
      coverSrc={coverSrc}
      logoSrc={logoSrc}
      onEnter={() => router.push('/login')}
      onVerify={() => router.push('/availability')}
    />
  )
}

export default HomePage
