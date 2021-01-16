import React from 'react'
import { Portal } from 'react-portal'

import CircleLoader from '~/components/atoms/CircleLoader'

import { Container } from './styles'

function PageLoader() {
  return (
    <Portal>
      <Container>
        <CircleLoader />
      </Container>
    </Portal>
  )
}

export default PageLoader
