import React from 'react'
import StoryContainer from '~/components/utils/StoryContainer'

import SearchInput from '.'

export default {
  title: 'Atoms/SearchInput',
  component: SearchInput
}

export const Default = () => (
  <StoryContainer background="rgba(0, 0, 0, 0.1)">
    <SearchInput placeholder="O que você deseja?" />
  </StoryContainer>
)
