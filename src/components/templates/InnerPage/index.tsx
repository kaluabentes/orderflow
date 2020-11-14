import React from 'react'

import { CommonProps } from '../../CommonProps'
import IconButton from '../../atoms/IconButton'
import Base from '../Base'
import { Header, BlankBrick } from './styles'
import Heading from '../../atoms/Heading'

interface InnerPageProps extends CommonProps {
  onBack: () => void
  title?: string
}

function InnerPage({ children, title = 'Title', onBack }: InnerPageProps) {
  return (
    <Base hasPadding>
      <Header>
        <IconButton name="arrow_back" onClick={onBack} />
        <Heading>{title}</Heading>
        <BlankBrick />
      </Header>
      {children}
    </Base>
  )
}

export default InnerPage
