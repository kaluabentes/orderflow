import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getOne } from '~/api/orders'
import TrackOrder from '~/components/templates/TrackOrder'

const INITIAL_STATE = {
  data: {
    id: '',
    activities: [],
    estimatedTime: undefined
  },
  isLoading: false
}

function TrackOrderPage() {
  const [order, setOrder] = useState(INITIAL_STATE)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      setOrder(prev => ({ ...prev, isLoading: true }))
      getOne(id).then((response: any) => {
        setOrder({
          data: response.data,
          isLoading: false
        })
      })
    }
  }, [id])

  return (
    <TrackOrder
      onBack={() => router.push('/')}
      isLoading={order.isLoading}
      order={order.data}
    />
  )
}

export default TrackOrderPage
