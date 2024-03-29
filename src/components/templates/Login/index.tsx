import React from 'react'

import LoginForm from '~/components/organisms/LoginForm'
import getString from '~/i18n/getString'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import InnerPage from '../InnerPage'

interface LoginProps {
  error?: string
  isLoading?: boolean
  onSubmit: (phone) => void
  onBack?: () => void
}

function Login({ error, isLoading, onSubmit, onBack }: LoginProps) {
  return (
    <InnerPage onBack={onBack} title={getString('loginPage.title')}>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {getString('loginPage.text')}
      </Paragraph>
      <LoginForm error={error} isLoading={isLoading} onSubmit={onSubmit} />
    </InnerPage>
  )
}

export default Login
