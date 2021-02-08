import React from 'react'
import useIsMounted from '~/utils/hooks/useIsMounted'

import { Container, PoweredBy, PoweredByLink } from './styles'

function Footer() {
  const isMounted = useIsMounted();

  return (
    <Container>
      <PoweredBy>
        Powered by{' '}
        {isMounted && (
          <PoweredByLink
            href={process.env.PROVIDER_URL}
            target="_blank"
            rel="noopoender noreferrer"
          >
            {process.env.PROVIDER_NAME}
          </PoweredByLink>
        )}
      </PoweredBy>
    </Container>
  )
}

export default Footer
