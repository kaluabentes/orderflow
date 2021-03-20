import React, { useState } from 'react'
import { getAll } from '~/api/orders'

import OrderBoard from '~/components/admin-templates/OrderBoard'

function AdminIndex() {
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
    <OrderBoard
      isLoading={state.isLoading}
      orders={state.data}
      onTabChange={handleTabChange}
    />
  )
}

export default AdminIndex
