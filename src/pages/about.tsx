import React from 'react'

import About from '~/components/templates/About'
import Store from '~/state/Store'

function AboutPage() {
  const store = Store.useContainer()

  return <About store={store.data} />
}

export default AboutPage
