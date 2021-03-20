import React from 'react'

import Box from '~/components/atoms/Box'
import theme from '~/styles/theme'
import { CommonProps } from '~/styles/utils/CommonProps'

const StatusMap = {
  confirmed: 'Confirmado',
  sent: 'Aguardando confirmação',
  ready: 'A caminho',
  finished: 'Entregue'
}

function Status({ children, ...props }: CommonProps) {
  return (
    <Box
      display="inline-block"
      padding="5px 10px"
      borderRadius="20px"
      color={children !== 'finished' ? 'white' : theme.colors.text}
      fontSize="0.75rem"
      textTransform="uppercase"
      fontWeight="600"
      background={children === 'finished' ? 'white' : theme.colors.warning}
      border={children === 'finished' && '1px solid rgba(0, 0, 0, 0.5)'}
      {...props}
    >
      {StatusMap[children as string]}
    </Box>
  )
}

export default Status
