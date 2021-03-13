import { useRouter } from 'next/router'
import React from 'react'
import OrderAlert from '~/components/organisms/OrderAlert'

import User from '~/state/User'

function OrderAlertContainer() {
  const user = User.useContainer()
  const router = useRouter()
  const { order } = user.state

  if (!order || router.asPath === `/track-order/${order.id}`) {
    return null
  }

  return (
    <OrderAlert
      onClick={() => router.push(`/track-order/${order.id}`)}
      order={order}
    />
  )
}

export default OrderAlertContainer
