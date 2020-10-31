import React from 'react'
import { BaseProps } from '../../BaseProps'

import { Image } from './styles'

interface LogoProps extends BaseProps {
  src: string
}

function Logo({ src, ...baseProps }: LogoProps) {
  return <Image {...baseProps} src={src} alt="" />
}

export default Logo
