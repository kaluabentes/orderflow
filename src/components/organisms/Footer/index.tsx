import React from 'react'
import getString from '~/i18n/getString'
import useIsMounted from '~/utils/hooks/useIsMounted'

import { Container, PoweredBy, PoweredByLink } from './styles'

function Footer() {
  const isMounted = useIsMounted()

  return (
    <Container>
      <PoweredBy>
        {getString('poweredBy')}{' '}
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
