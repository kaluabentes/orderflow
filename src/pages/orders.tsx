import React, { useEffect, useState } from 'react'
import { getAll } from '~/api/orders'

import Orders from '~/components/templates/Orders'

const INITIAL_STATE = {
  data: [],
  isLoading: false
}

function OrdersPage() {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true }))
    getAll().then(response => {
      setState({
        data: response.data,
        isLoading: false
      })
    })
  }, [])

  return <Orders isLoading={state.isLoading} orders={state.data} />
}

export default OrdersPage
