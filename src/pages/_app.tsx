import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ForceUpdateProvider } from '~/utils/hooks/useForceUpdate'

Sentry.init({
  dsn:
    'https://99e75d05cc5d4bfa89db557158780c18@o447297.ingest.sentry.io/5507779',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
})

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ForceUpdateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ForceUpdateProvider>
  )
}

export default App
