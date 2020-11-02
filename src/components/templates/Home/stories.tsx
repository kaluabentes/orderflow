import { action } from '@storybook/addon-actions'
import React from 'react'

import Home, { coverSrc } from '.'
import { logoSrc } from '../../atoms/Logo'

export default {
  title: 'Templates/Home',
  component: Home
}

export const Default = () => (
  <Home
    title="Dona Rosa Bar e Restaurante"
    text="Faça seu pedido online e entregaremos na sua porta"
    enterLabel="Entrar"
    verifyLabel="Verificar disponibilidade"
    coverSrc={coverSrc}
    logoSrc={logoSrc}
    onEnter={action('onEnter')}
    onVerify={action('onVerify')}
  />
)
