import { useRouter } from 'next/router'
import React from 'react'

import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import InnerHeader from '~/components/organisms/InnerHeader'
import OrderSummary from '~/components/organisms/OrderSummary'
import OrderSummaryContainer from '~/containers/OrderSummaryContainer'
import Cart from '~/state/Cart'
import useIsMobile from '~/utils/hooks/useIsMobile'
import App from '../App'

function CartTemplate({ onConfirm, onEdit, onRemove, onKeepBuying }) {
  const isMobile = useIsMobile()

  return (
    <App title="Pedido">
      <Box
        width="100%"
        maxWidth={isMobile ? null : '400px'}
        margin="0 auto"
        alignItems="center"
        padding="15px 0"
      >
        <OrderSummaryContainer />
      </Box>
    </App>
  )
}

export default CartTemplate