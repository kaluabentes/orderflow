import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getOne } from '~/api/orders'
import TrackOrder from '~/components/templates/TrackOrder'

const INITIAL_STATE = {
  data: undefined
}

function TrackOrderPage() {
  const [order, setOrder] = useState(INITIAL_STATE)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      getOne(id).then((response: any) => {
        setOrder({
          data: response.data
        })
      })
    }
  }, [id])

  return (
    <TrackOrder
      onOrderClick={() => router.push(`/order/${order.data.id}`)}
      onBack={() => router.push('/')}
      isLoading={!order.data}
      order={order.data}
    />
  )
}

export default TrackOrderPage
