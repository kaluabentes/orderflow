import React, { useState } from 'react'

import Checkbox from '.'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
}

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Checkbox isChecked={isChecked} onChange={() => setIsChecked(v => !v)} />
  )
}
