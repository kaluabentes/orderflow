import React from 'react'

import { Container, PoweredBy, PoweredByLink } from './styles'

function Footer() {
  return (
    <Container>
      <PoweredBy>
        Powered by{' '}
        <PoweredByLink
          href={process.env.PROVIDER_URL}
          target="_blank"
          rel="noopoender noreferrer"
        >
          {process.env.PROVIDER_NAME}
        </PoweredByLink>
      </PoweredBy>
    </Container>
  )
}

export default Footer
