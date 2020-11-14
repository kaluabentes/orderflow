import React, { useState } from 'react'

import filterNumber from '../../../utils/filters/filterNumber'
import formatPhone from '../../../utils/formatters/formatPhone'
import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'
import Paragraph from '../../atoms/Paragraph'
import InnerPage from '../InnerPage'

interface LoginProps {
  title?: string
  text?: string
  advanceLabel: string
  phoneLabel: string
  error?: string
  isLoading?: boolean
  onAdvance: (phone) => void
  onBack?: () => void
}

function Login({
  title,
  text,
  advanceLabel,
  phoneLabel,
  error,
  isLoading,
  onAdvance,
  onBack
}: LoginProps) {
  const [phone, setPhone] = useState('')

  return (
    <InnerPage onBack={onBack} title={title}>
      <Heading variant="h2" size="large" margin="0 0 20px 0">
        {title}
      </Heading>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {text}
      </Paragraph>
      <Input
        id="phone"
        value={phone}
        onChange={event => setPhone(formatPhone(event.target.value))}
        margin="0 0 20px 0"
        label={phoneLabel}
        maxLength="15"
        placeholder="(00) 00000-0000"
        error={error}
      />
      <Button
        variant="primary"
        isLoading={isLoading}
        onClick={() => onAdvance(filterNumber(phone))}
      >
        {advanceLabel}
      </Button>
    </InnerPage>
  )
}

export default Login
