import React, { useEffect, useState } from 'react'
import { getAll } from '~/api/orders'

import Workflow from '~/components/admin-templates/Workflow'
import WorkflowOrder from '~/components/organisms/WorkflowOrder'

function Index() {
  const [state, setState] = useState({
    data: [],
    isLoading: false
  })
  const [order, setOrder] = useState(undefined)

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
    <>
      <Workflow
        onOrderPress={ord => setOrder(ord)}
        isLoading={state.isLoading}
        orders={state.data}
        onTabChange={handleTabChange}
      />
      <WorkflowOrder
        onClose={() => setOrder(undefined)}
        isOpen={order}
        order={order}
      />
    </>
  )
}

export default Index
