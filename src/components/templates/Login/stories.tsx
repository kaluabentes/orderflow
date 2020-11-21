import { action } from '@storybook/addon-actions'
import React from 'react'

import Login from '.'

export default {
  title: 'Templates/Login',
  component: Login
}

export const Default = () => (
  <Login
    title="Entrar"
    text="Informe seu celular para que possamos enviar um codigo de verificação"
    onBack={action('onBack')}
    onSubmit={action('onSubmit')}
    submitLabel="Avançar"
    phoneLabel="Celular"
  />
)
