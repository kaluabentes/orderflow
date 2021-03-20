import React, { useState } from 'react'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import { Flasher } from '~/components/organisms/OrderAlert/styles'

import { Header } from './styles'

function AdminApp({ children, title }) {
  const [state, setState] = useState({
    isOn: false,
    variant: 'primary'
  })

  return (
    <>
      <Header variant="primary">
        <IconButton color="white" height="60px" width="60px" name="sort" />
        <Heading color="white" as="h1" fontSize="1.2rem">
          {title}
        </Heading>
        <Box position="relative">
          <IconButton
            onClick={() => setState(prev => ({ ...prev, isOn: !prev.isOn }))}
            height="60px"
            borderRadius="10px"
            width="60px"
            margin="0 5px 0 0"
            name="power_settings_new"
            color={state.isOn ? 'white' : 'rgba(255, 255, 255, 0.3)'}
          />
        </Box>
      </Header>
      <main>{children}</main>
    </>
  )
}

export default AdminApp
