import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getOne } from '~/api/orders'
import Order from '~/components/templates/Order'

const INITIAL_STATE = {
  data: undefined
}

function OrderPage() {
  const router = useRouter()
  const { id } = router.query
  const [order, setOrder] = useState(INITIAL_STATE)

  useEffect(() => {
    if (id) {
      getOne(id).then(response => {
        setOrder({
          data: response.data
        })
      })
    }
  }, [id])

  return <Order isLoading={!order.data} order={order.data} />
}

export default OrderPage
