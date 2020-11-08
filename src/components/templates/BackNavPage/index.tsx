import React from 'react'

import { CommonProps } from '../../CommonProps'
import Base from '../Base'

import { CustomIconButton as IconButton } from './styles'

interface BackNavPageProps extends CommonProps {
  onBack: () => void
}

function BackNavPage({ children, onBack }: BackNavPageProps) {
  return (
    <Base hasPadding>
      <IconButton margin="0 0 30px 0" name="arrow_back" onClick={onBack} />
      {children}
    </Base>
  )
}

export default BackNavPage
