import React, { useEffect, useState } from 'react'
import { getAll } from '~/api/orders'
import AdminApp from '~/components/templates/AdminApp'

import Workflow from '~/components/templates/AdminWorkflow'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import OrderDetail from '~/components/organisms/OrderDetail'
import WorkflowOrder from '~/components/organisms/WorkflowOrder'
import useIsMobile from '~/utils/useIsMobile'

function Index() {
  const [state, setState] = useState({
    data: [],
    isLoading: false
  })
  const [order, setOrder] = useState(undefined)
  const isMobile = useIsMobile()

  useEffect(() => {
    fetchOrders()
  }, [])

  function fetchOrders(status = 'sent') {
    setState(prev => ({ ...prev, isLoading: true }))
    getAll(status).then(response => {
      setState({
        data: response.data,
        isLoading: false
      })
    })
  }

  function handleTabChange(statusKey) {
    fetchOrders(statusKey)
  }

  return (
    <AdminApp title="Workflow">
      <Box display="flex" flexDirection={!isMobile && 'row'}>
        <Workflow
          activeOrder={order}
          onOrderPress={ord => setOrder(ord)}
          isLoading={state.isLoading}
          orders={state.data}
          onTabChange={handleTabChange}
        />
        {!isMobile && order && (
          <Box
            background="white"
            margin="0 auto"
            width="100%"
            overflow="auto"
            maxHeight="100vh"
            padding="20px"
          >
            <OrderDetail order={order} />
          </Box>
        )}
      </Box>
      {isMobile && (
        <WorkflowOrder
          onClose={() => setOrder(undefined)}
          isOpen={order}
          order={order}
        />
      )}
    </AdminApp>
  )
}

export default Index
