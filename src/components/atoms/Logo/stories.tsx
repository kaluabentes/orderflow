import React from 'react'

import Logo, { logoSrc } from '.'

export default {
  title: 'Atoms/Logo',
  component: Logo
}

export const Default = () => <Logo src={logoSrc} />
