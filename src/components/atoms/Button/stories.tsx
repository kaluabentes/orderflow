import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '.'
import StoryContainer from '../../utils/StoryContainer'

export default {
  title: 'Atoms/Button',
  component: Button
}

export const Default = () => (
  <StoryContainer>
    <Button onClick={action('onClick')}>Default</Button>
    <Button variant="primary" onClick={action('onClick')}>
      Primary
    </Button>
    <Button variant="info" onClick={action('onClick')}>
      Info
    </Button>
    <Button variant="warning" onClick={action('onClick')}>
      Warning
    </Button>
  </StoryContainer>
)

export const Loading = () => (
  <StoryContainer>
    <Button isLoading onClick={action('onClick')}>
      Default
    </Button>
    <Button isLoading variant="primary" onClick={action('onClick')}>
      Primary
    </Button>
    <Button isLoading variant="info" onClick={action('onClick')}>
      Info
    </Button>
    <Button isLoading variant="warning" onClick={action('onClick')}>
      Warning
    </Button>
  </StoryContainer>
)
