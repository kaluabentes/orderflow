import React from 'react'

import Input from '.'
import StoryContainer from '../../utils/StoryContainer'

export default {
  title: 'Atoms/Input',
  component: Input
}

export const Default = () => {
  const [value, setValue] = React.useState('')

  return (
    <StoryContainer>
      <Input
        placeholder="Digite seu email"
        onChange={event => setValue(event.target.value)}
        value={value}
        name="email"
        type="email"
        label="Email"
      />
      <Input
        placeholder="Digite seu email"
        onChange={event => setValue(event.target.value)}
        value={value}
        name="email"
        type="email"
        label="Email"
        error="This field must be filled"
      />
    </StoryContainer>
  )
}
