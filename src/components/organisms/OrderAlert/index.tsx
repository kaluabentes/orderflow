import React from 'react'
import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Paragraph from '~/components/atoms/Paragraph'
import getString from '~/i18n/getString'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'
import { Flasher, GlobalStyle } from './styles'

function OrderAlert({ onClick, order }) {
  const isMobile = useIsMobile()

  return (
    <>
      <GlobalStyle />
      <Actionable
        position="fixed"
        bottom={isMobile ? '0px' : '30px'}
        right={isMobile ? '0px' : '30px'}
        width={isMobile ? '100%' : '350px'}
        background="white"
        color={theme.colors.text}
        boxShadow="0 0 5px 2px rgba(0, 0, 0, 0.05)"
        padding={isMobile ? '20px' : '25px 20px'}
        as="button"
        display="block"
        onClick={onClick}
        borderRadius={isMobile ? '0px' : '7px'}
      >
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            fontWeight="500"
          >
            <Flasher margin="0 10px 0 0" /> {getString('trackOrder')}
          </Box>
          <Box display="flex" fontWeight="bold">
            #{order.id}
          </Box>
        </Box>
      </Actionable>
    </>
  )
}

export default OrderAlert
