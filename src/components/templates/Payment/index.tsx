import React, { useEffect } from 'react'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import PaymentForm from '~/components/organisms/PaymentForm'
import OrderSummaryContainer from '~/containers/OrderSummaryContainer'
import getString from '~/i18n/getString'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'

import App from '../App'

function Payment({ selectedMethodId, change, methods, onMethodClick }) {
  const isMobile = useIsMobile()
  const size = isMobile ? '15px' : '40px'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <App title="Pagamento">
      <Box
        display="flex"
        margin={`${size} auto 20px auto`}
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="flex-start"
        maxWidth={theme.layout.maxWidth}
        width="100%"
      >
        <PaymentForm
          selectedMethodId={selectedMethodId}
          change={change}
          onMethodClick={onMethodClick}
          methods={methods}
        />
        <Box display="flex" height={size} width="50px" />
        <Box
          display="flex"
          width="100%"
          maxWidth={!isMobile ? '400px' : undefined}
        >
          <OrderSummaryContainer confirmText={getString('confirm')} />
        </Box>
      </Box>
    </App>
  )
}

export default Payment
