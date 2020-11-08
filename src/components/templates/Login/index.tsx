import React from 'react'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'
import Paragraph from '../../atoms/Paragraph'
import BackNav from '../BackNav'

interface LoginProps {
  title: string
  text: string
  advanceLabel: string
  phoneLabel: string
  error?: string
  isLoading?: boolean
  phone?: string
  onPhoneChange?: (event: any) => void
  onAdvance: () => void
  onBack: () => void
}

function Login({
  title,
  text,
  advanceLabel,
  phoneLabel,
  error,
  isLoading,
  phone,
  onPhoneChange,
  onAdvance,
  onBack
}: LoginProps) {
  return (
    <BackNav onBack={onBack}>
      <Heading size="large" margin="0 0 10px 0">
        {title}
      </Heading>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {text}
      </Paragraph>
      <Input
        name="phone"
        value={phone}
        onChange={onPhoneChange}
        margin="0 0 20px 0"
        label={phoneLabel}
        maxLength="15"
        placeholder="(00) 00000-0000"
        error={error}
      />
      <Button variant="primary" isLoading={isLoading} onClick={onAdvance}>
        {advanceLabel}
      </Button>
    </BackNav>
  )
}

export default Login
