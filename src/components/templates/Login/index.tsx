import React from 'react'

import filterNumber from '../../../utils/filters/filterNumber'
import formatPhone from '../../../utils/formatters/formatPhone'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'
import Paragraph from '../../atoms/Paragraph'
import Base from '../Base'

import { CustomIconButton as IconButton } from './styles'

interface LoginProps {
  title: string
  text: string
  advanceLabel: string
  phoneLabel: string
  error?: string
  isLoading: boolean
  phone: string
  onPhoneChange: (event: any) => void
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
    <Base hasPadding>
      <IconButton margin="0 0 30px 0" name="arrow_back" onClick={onBack} />
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
    </Base>
  )
}

export default Login
