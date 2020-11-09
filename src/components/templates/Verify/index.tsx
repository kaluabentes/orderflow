import React, { useState } from 'react'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import CodeInput from '../../atoms/CodeInput'
import Paragraph from '../../atoms/Paragraph'
import BackNavPage from '../BackNavPage'

interface VerifyProps {
  title?: string
  text?: React.ReactNode
  advanceLabel: string
  codeLabel: string
  error?: string
  isLoading?: boolean
  onAdvance: (code) => void
  onBack?: () => void
}

function Verify({
  title,
  text,
  advanceLabel,
  codeLabel,
  error,
  isLoading,
  onAdvance,
  onBack
}: VerifyProps) {
  const [code, setCode] = useState('')

  return (
    <BackNavPage onBack={onBack}>
      <Heading size="large" margin="0 0 20px 0">
        {title}
      </Heading>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {text}
      </Paragraph>
      <CodeInput
        margin="0 0 20px 0"
        error={error}
        onChange={code => setCode(code)}
        id="verificationCode"
        label={codeLabel}
      />
      <Button
        variant="primary"
        isLoading={isLoading}
        onClick={() => onAdvance(code)}
      >
        {advanceLabel}
      </Button>
    </BackNavPage>
  )
}

export default Verify
