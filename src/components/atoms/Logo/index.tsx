import React from 'react'
import { CommonProps } from '../../CommonProps'

import { Image } from './styles'

export const logoSrc =
  'https://s3.amazonaws.com/thumbnails.venngage.com/template/50856174-6975-471b-b1b0-20fbd6e76781.png'

interface LogoProps extends CommonProps {
  src: string
}

function Logo({ src, ...CommonProps }: LogoProps) {
  return <Image {...CommonProps} src={src} alt="" />
}

export default Logo
