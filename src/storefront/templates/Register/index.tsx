import React, { useState } from 'react'

import InnerPage from '~/storefront/templates/InnerPage'
import Paragraph from '~/components/atoms/Paragraph'
import getString from '~/i18n/getString'
import ProfileForm from '~/components/organisms/ProfileForm'

interface District {
  id: string
  name: string
}

interface RegisterProps {
  districts: District[]
  error?: {
    name: string | null
    district: string | null
    street: string | null
    number: string | null
  }
  isLoading?: boolean
  onBack?: () => void
  onSubmit: (data) => void
}

function Register({ districts, isLoading, onSubmit, onBack }: RegisterProps) {
  return (
    <InnerPage onBack={onBack} title={getString('app.register.title')}>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {getString('app.register.text')}
      </Paragraph>
      <ProfileForm
        isLoading={isLoading}
        districts={districts}
        onSubmit={onSubmit}
      />
    </InnerPage>
  )
}

export default Register
