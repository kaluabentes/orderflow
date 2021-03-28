import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import GlobalStyle from '../styles/global'
import theme, { adminTheme } from '../styles/theme'
import '~/styles/fonts.css'
import ContainersProvider from '~/state'
import OrderModalContainer from '~/containers/OrderModalContainer'
import AddressModalContainer from '~/containers/AddressModalContainer'
import LoginModalContainer from '~/containers/LoginModalContainer'
import ConfirmContainer from '~/containers/ConfirmContainer'
import PromptContainer from '~/containers/PromptContainer'
import OrderAlertContainer from '~/containers/OrderAlertContainer'
import AlertContainer from '~/containers/AlertContainer'

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
        <OrderModalContainer />
        <AddressModalContainer />
        <LoginModalContainer />
        <ConfirmContainer />
        <PromptContainer />
        <OrderAlertContainer />
        <AlertContainer />
      </ThemeProvider>
    </ContainersProvider>
  )
}

export default App
