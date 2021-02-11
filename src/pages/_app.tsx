import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import '~/styles/fonts.css'
import ContainersProvider from '~/state'
import OrderWizardContainer from '~/containers/OrderWizardContainer'

Sentry.init({
  dsn:
    'https://99e75d05cc5d4bfa89db557158780c18@o447297.ingest.sentry.io/5507779',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
})

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ContainersProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <OrderWizardContainer />
      </ThemeProvider>
    </ContainersProvider>
  )
}

export default App
