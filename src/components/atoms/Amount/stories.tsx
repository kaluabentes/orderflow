import React, { useState } from 'react'

import Amount from '.'

export default {
  title: 'Atoms/Amount',
  component: Amount
}

export const Default = () => {
  const [value, setValue] = useState(0)

  return (
    <Amount value={value} onChange={value => setValue(value)}>
      E-mail
    </Amount>
  )
}
