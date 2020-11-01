import React from 'react'
import { ComponentProps } from '../../ComponentProps'

import { Image } from './styles'

export const logoSrc =
  'https://s3.amazonaws.com/thumbnails.venngage.com/template/50856174-6975-471b-b1b0-20fbd6e76781.png'

interface LogoProps extends ComponentProps {
  src: string
}

function Logo({ src, ...componentProps }: LogoProps) {
  return <Image {...componentProps} src={src} alt="" />
}

export default Logo
