import React from 'react'
import StoryContainer from '~/components/utils/StoryContainer'

import List from '.'

export default {
  title: 'Molecules/List',
  component: List
}

export const Default = () => (
  <StoryContainer>
    <List>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List>
  </StoryContainer>
)
