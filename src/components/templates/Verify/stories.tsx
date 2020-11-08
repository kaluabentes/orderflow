import { action } from '@storybook/addon-actions'
import React from 'react'

import Verify from '.'

export default {
  title: 'Templates/Verify',
  component: Verify
}

export const Default = () => (
  <Verify
    title="Verificar"
    text={
      <>
        Informe o codigo de verificação enviado para{' '}
        <strong>(48) 99628-8801</strong>
      </>
    }
    onBack={action('onBack')}
    onAdvance={action('onAdvance')}
    advanceLabel="Avançar"
    codeLabel="Código de verificação"
  />
)
