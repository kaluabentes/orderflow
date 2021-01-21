import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import Welcome, { coverSrc } from '~/components/templates/Welcome'
import usePageLoader from '~/components/organisms/PageLoader/usePageLoader'
import PageLoader from '~/components/organisms/PageLoader'

function WelcomePage() {
  const router = useRouter()
  const isLoading = usePageLoader()

  return (
    <>
      {isLoading && <PageLoader />}
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
