import React from 'react'

import Logo from '.'

export default {
  title: 'Atoms/Logo',
  component: Logo
}

const logoUrl =
  'https://s3.amazonaws.com/thumbnails.venngage.com/template/50856174-6975-471b-b1b0-20fbd6e76781.png'

export const Default = () => <Logo src={logoUrl} />
