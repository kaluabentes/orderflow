import { action } from '@storybook/addon-actions'
import React from 'react'

import Home from '.'
import { logoSrc } from '../../atoms/Logo'

export default {
  title: 'Templates/Home',
  component: Home
}

const coverSrc =
  'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500'

export const Default = () => (
  <Home
    title="Dona Rosa Bar e Restaurante"
    text="Faça seu pedido online e entregaremos na sua porta"
    enterText="Entrar"
    verifyText="Verificar disponibilidade"
    coverSrc={coverSrc}
    logoSrc={logoSrc}
    onEnter={action('onEnter')}
    onVerify={action('onVerify')}
  />
)
