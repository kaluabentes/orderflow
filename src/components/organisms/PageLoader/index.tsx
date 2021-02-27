import React from 'react'
import { Portal } from 'react-portal'

import CircleLoader from '~/components/atoms/CircleLoader'
import useIsMounted from '~/utils/useIsMounted'

import { Container } from './styles'

function PageLoader() {
  return (
    <Container>
      <CircleLoader />
    </Container>
  )
}

export default PageLoader
