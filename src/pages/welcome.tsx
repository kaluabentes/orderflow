import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import Welcome, { coverSrc } from '~/components/templates/Welcome'

function WelcomePage() {
  const router = useRouter()

  return (
    <>
      <Welcome
        title={process.env.STORE_NAME}
        coverSrc={coverSrc}
        logoSrc="/orderflow.svg"
        onEnter={() => router.push('/login')}
        onVerify={() => router.push('/availability')}
      />
    </>
  )
}

export default WelcomePage
