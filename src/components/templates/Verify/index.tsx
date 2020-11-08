import React from 'react'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import CodeInput from '../../atoms/CodeInput'
import Paragraph from '../../atoms/Paragraph'
import BackNavPage from '../BackNavPage'

interface VerifyProps {
  title: string
  text: React.ReactNode
  advanceLabel: string
  codeLabel: string
  error?: string
  isLoading?: boolean
  onCodeChange?: (event: any) => void
  onAdvance: () => void
  onBack: () => void
}

function Verify({
  title,
  text,
  advanceLabel,
  codeLabel,
  error,
  isLoading,
  onCodeChange,
  onAdvance,
  onBack
}: VerifyProps) {
  return (
    <BackNavPage onBack={onBack}>
      <Heading size="large" margin="0 0 10px 0">
        {title}
      </Heading>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {text}
      </Paragraph>
      <CodeInput
        margin="0 0 20px 0"
        error={error}
        onChange={onCodeChange}
        id="verificationCode"
        label={codeLabel}
      />
      <Button variant="primary" isLoading={isLoading} onClick={onAdvance}>
        {advanceLabel}
      </Button>
    </BackNavPage>
  )
}

export default Verify
