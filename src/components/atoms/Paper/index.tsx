import React from 'react'

import { CommonProps } from '~/styles/utils/CommonProps'
import useIsMobile from '~/utils/useIsMobile'
import Box from '../Box'

function Paper({ children, ...props }: CommonProps) {
  const isMobile = useIsMobile()

  return (
    <Box
      display="flex"
      padding={isMobile ? '20px' : '30px'}
      background="white"
      width="100%"
      borderRadius="10px"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Paper
