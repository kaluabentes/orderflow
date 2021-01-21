import React from 'react'
import { logoSrc } from '~/components/atoms/Logo'
import Welcome, { coverSrc } from '~/components/templates/Welcome'

import PageLoader from '.'

export default {
  title: 'Organisms/PageLoader',
  component: PageLoader
}

export const Default = () => (
  <>
    <PageLoader />
    <Welcome
      title="Dona Rosa Bar e Restaurante"
      coverSrc={coverSrc}
      logoSrc={logoSrc}
      onEnter={() => {}}
      onVerify={() => {}}
    />
  </>
)
