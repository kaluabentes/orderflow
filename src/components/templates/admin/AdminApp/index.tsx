import React from 'react'

import { Header } from './styles'

function AdminApp({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default AdminApp
