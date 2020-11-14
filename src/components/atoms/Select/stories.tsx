import React, { useState } from 'react'

import StoryContainer from '~/components/utils/StoryContainer'

import Select from '.'

export default {
  title: 'Atoms/Select',
  component: Select
}

export const Default = () => {
  const [value, setValue] = useState('')

  return (
    <StoryContainer>
      <Select
        label="Select"
        id="select"
        value={value}
        onChange={event => setValue(event.target.value)}
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </StoryContainer>
  )
}
