import React from 'react'

import { CommonProps } from '../../../components/CommonProps'
import IconButton from '../../../components/atoms/IconButton'
import Base from '../Base'
import { Header, BlankBrick } from './styles'
import Heading from '../../../components/atoms/Heading'

interface InnerPageProps extends CommonProps {
  onBack: () => void
  title?: string
}

function InnerPage({ children, title = 'Title', onBack }: InnerPageProps) {
  return (
    <Base hasPadding>
      <Header>
        <IconButton name="arrow_back" onClick={onBack} />
        <Heading size="medium">{title}</Heading>
        <BlankBrick />
      </Header>
      {children}
    </Base>
  )
}

export default InnerPage
