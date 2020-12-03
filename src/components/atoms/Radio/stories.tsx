import React, { useState } from 'react'

import Radio from '.'

export default {
  title: 'Atoms/Radio',
  component: Radio
}

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Radio isChecked={isChecked} onChange={() => setIsChecked(!isChecked)} />
  )
}
