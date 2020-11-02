import React from 'react'

import Input from '.'

export default {
  title: 'Atoms/Input',
  component: Input
}

export const Default = () => {
  const [value, setValue] = React.useState('')

  return (
    <Input
      placeholder="Digite seu email"
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  )
}
