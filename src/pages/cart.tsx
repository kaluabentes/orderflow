import { useRouter } from 'next/router'
import React from 'react'

import CartTemplate from '~/components/templates/Cart'

function CartPage() {
  const router = useRouter()

  return (
    <CartTemplate
      onBack={() => router.back()}
      onConfirm={() => alert('onConfirm')}
      onEdit={() => alert('onEdit')}
      onRemove={() => alert('onRemove')}
    />
  )
}

export default CartPage
