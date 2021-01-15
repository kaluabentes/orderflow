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

  return (
    <>
      <Amount
        isLeftDisabled
        value={value}
        onChange={value => setValue(value)}
      />
      <Amount
        isRightDisabled
        value={value}
        onChange={value => setValue(value)}
      />
    </>
  )
}
