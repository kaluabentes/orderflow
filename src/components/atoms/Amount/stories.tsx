import React, { useState } from 'react'

import Amount from '.'

export default {
  title: 'Atoms/Amount',
  component: Amount
}

export const Default = () => {
  const [value, setValue] = useState(0)

  return <Amount value={value} onChange={value => setValue(value)} />
}

export const Disabled = () => {
  const [value, setValue] = useState(0)

  return <Amount isDisabled value={value} onChange={value => setValue(value)} />
}
