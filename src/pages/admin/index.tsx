import React, { useState } from 'react'
import { getAll } from '~/api/orders'

import Workflow from '~/components/admin-templates/Workflow'

function Index() {
  const [state, setState] = useState({
    data: [],
    isLoading: false
  })

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
    <Workflow
      isLoading={state.isLoading}
      orders={state.data}
      onTabChange={handleTabChange}
    />
  )
}

export default Index
