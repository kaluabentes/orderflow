import React from 'react'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'

import { Header } from './styles'

function InnerHeader({ title, onBack }) {
  return (
    <Header>
      <IconButton
        color="white"
        onClick={onBack}
        name="arrow_back"
        margin="0 20px 0 0"
      />
      <Heading fontSize="medium" color="white">
        {title}
      </Heading>
    </Header>
  )
}

export default InnerHeader
