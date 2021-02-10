import { useRouter } from 'next/router'
import React from 'react'

import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import InnerHeader from '~/components/organisms/InnerHeader'
import OrderSummary from '~/components/organisms/OrderSummary'
import OrderSummaryContainer from '~/containers/OrderSummary'
import Cart from '~/state/Cart'
import App from '../App'

function CartTemplate({ onConfirm, onEdit, onRemove, onKeepBuying }) {
  return (
    <App title="Pedido">
      <Box
        width="100%"
        maxWidth="400px"
        margin="0 auto"
        alignItems="center"
        padding="20px 0"
      >
        <Box width="100%" padding="0 20px 20px 20px">
          <Button onClick={onKeepBuying}>Continuar comprando</Button>
        </Box>
        <OrderSummaryContainer />
      </Box>
    </App>
  )
}

export default CartTemplate
