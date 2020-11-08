import { action } from '@storybook/addon-actions'
import React from 'react'

import CodeInput from '.'
import StoryContainer from '../../utils/StoryContainer'

export default {
  title: 'Atoms/CodeInput',
  component: CodeInput
}

export const Default = () => (
  <StoryContainer>
    <CodeInput
      error="Codigo invalido"
      onChange={action('onChange')}
      id="verificationCode"
      label="Código de verificação"
    />
  </StoryContainer>
)
