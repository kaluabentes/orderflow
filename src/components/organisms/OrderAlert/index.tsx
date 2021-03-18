import React from 'react'
import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Paragraph from '~/components/atoms/Paragraph'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'
import { Flasher } from './styles'

function OrderAlert({ onClick, order }) {
  const isMobile = useIsMobile()

  return (
    <Actionable
      position="fixed"
      bottom={isMobile ? '0px' : '10px'}
      left={isMobile ? '0px' : '10px'}
      width={isMobile ? '100%' : '350px'}
      background={theme.colors.text}
      color="white"
      padding="20px 15px"
      as="button"
      display="block"
      onClick={onClick}
      borderRadius={isMobile ? '0px' : '7px'}
    >
      <Box width="100%" flexDirection="row" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center" fontWeight="500">
          <Flasher margin="0 7px 0 0" /> Acompanhar pedido
        </Box>
        <Box fontWeight="bold">#{order.id}</Box>
      </Box>
    </Actionable>
  )
}

export default OrderAlert
