import React from 'react'
import TrackOrder from '~/components/templates/TrackOrder'
import Order from '~/state/Order'

function TrackOrderPage() {
  const [order] = Order.useContainer()

  console.log('ORDER', order)

  return <TrackOrder order={order} />
}

export default TrackOrderPage
