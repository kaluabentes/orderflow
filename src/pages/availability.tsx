import { useRouter } from 'next/router'
import React from 'react'
import Availability from '~/storefront/templates/Availability'

function AvailabilityPage() {
  const router = useRouter()

  return (
    <Availability
      onBack={() => router.push('/')}
      districts={[
        {
          id: '1',
          name: 'Campeche'
        },
        {
          id: '2',
          name: 'Flores'
        }
      ]}
    />
  )
}

export default AvailabilityPage
