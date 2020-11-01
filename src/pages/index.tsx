import React from 'react'

import { logoSrc } from '../components/atoms/Logo'
import Home, { coverSrc } from '../components/templates/Home'

function HomePage() {
  return (
    <Home
      title="Dona Rosa Bar e Restaurante"
      text="Faça seu pedido online e entregaremos na sua porta"
      enterText="Entrar"
      verifyText="Verificar disponibilidade"
      coverSrc={coverSrc}
      logoSrc={logoSrc}
      onEnter={() => {}}
      onVerify={() => {}}
    />
  )
}

export default HomePage
