import React, { useState } from 'react'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import useIsMobile from '~/utils/useIsMobile'

import { Container, Header, Main } from './styles'

function AdminApp({ children, title }) {
  const isMobile = useIsMobile()
  const [state, setState] = useState({
    isOn: false,
    variant: 'primary'
  })

  return (
    <Container>
      <Header variant="primary">
        <IconButton color="white" height="60px" width="60px" name="sort" />
        {isMobile && (
          <Heading color="white" as="h1" fontSize="1.2rem">
            {title}
          </Heading>
        )}
        <Box position="relative">
          <IconButton
            onClick={() => setState(prev => ({ ...prev, isOn: !prev.isOn }))}
            height="50px"
            borderRadius="50%"
            width="50px"
            margin="0 10px 0 0"
            name="power_settings_new"
            background={state.isOn ? 'rgba(0, 0, 0, 0.15)' : 'transparent'}
            color={state.isOn ? 'white' : 'rgba(255, 255, 255, 0.3)'}
          />
        </Box>
      </Header>
      <Main>{children}</Main>
    </Container>
  )
}

export default AdminApp
