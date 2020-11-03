import React from 'react'
import getString from '../../../i18n/getString'

import filterNumber from '../../../utils/filters/number'
import formatPhone from '../../../utils/formatters/phone'
import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'
import Paragraph from '../../atoms/Paragraph'

import { Container, CustomIconButton as IconButton } from './styles'

interface LoginProps {
  title: string
  text: string
  advanceLabel: string
  phoneLabel: string
  onAdvance: (phone: string) => void
  onBack: () => void
}

function Login({
  title,
  text,
  advanceLabel,
  phoneLabel,
  onAdvance,
  onBack
}: LoginProps) {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState('')

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value))
  }

  function handleAdvance() {
    if (phone.length < 15) {
      setError(getString('app.login.phoneError'))
      return
    }

    setError('')
    onAdvance(filterNumber(phone))
  }

  return (
    <Container>
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
        onChange={handlePhoneChange}
        margin="0 0 20px 0"
        label={phoneLabel}
        maxLength="15"
        placeholder="(00) 00000-0000"
        error={error}
      />
      <Button variant="primary" onClick={handleAdvance}>
        {advanceLabel}
      </Button>
    </Container>
  )
}

export default Login
