import React, { useEffect } from 'react'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import PaymentForm from '~/components/organisms/PaymentForm'
import OrderSummaryContainer from '~/containers/OrderSummaryContainer'
import getString from '~/i18n/getString'
import useIsMobile from '~/utils/useIsMobile'

import App from '../App'

function Payment({ selectedMethodId, change, methods, onMethodClick }) {
  const isMobile = useIsMobile()
  const size = isMobile ? '15px' : '30px'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <App title="Pagamento">
      <Box
        margin={`${size} auto 0 auto`}
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="flex-start"
      >
        <PaymentForm
          selectedMethodId={selectedMethodId}
          change={change}
          onMethodClick={onMethodClick}
          methods={methods}
        />
        <Box height={size} width="50px" />
        <Box width="100%" maxWidth={!isMobile ? '400px' : undefined}>
          <OrderSummaryContainer confirmText={getString('confirm')} />
        </Box>
      </Box>
    </App>
  )
}

export default Payment
