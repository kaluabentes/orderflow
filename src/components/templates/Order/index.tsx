import React from 'react'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import PageLoader from '~/components/organisms/PageLoader'
import useIsMobile from '~/utils/useIsMobile'
import App from '../App'

function Order({ isLoading, order }) {
  const isMobile = useIsMobile()

  return isLoading ? (
    <PageLoader />
  ) : (
    <App title="Pedido">
      <Box alignItems="center">
        <Paper maxWidth="400px" margin={`${isMobile ? '15px' : '60px'} 0`}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box margin="0" as="h3" fontWeight="500" fontSize="1.375rem">
              Pedido
            </Box>
            <Paragraph fontWeight="600" fontSize="1.375rem">
              #{order.id}
            </Paragraph>
          </Box>
          <Box>
            <Heading as="h4" fontSize="12px">
              Produtos
            </Heading>
          </Box>
        </Paper>
      </Box>
    </App>
  )
}

export default Order
