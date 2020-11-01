import { action } from '@storybook/addon-actions'
import React from 'react'
import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'

import Logo from '../../atoms/Logo'
import Paragraph from '../../atoms/Paragraph'

import { Container, Cover, Content } from './styles'

interface HomeProps {
  coverSrc: string
  logoSrc: string
  title: string
  text: string
  onEnter: () => void
  onVerify: () => void
  enterText: string
  verifyText: string
}

function Home({
  coverSrc,
  logoSrc,
  title,
  text,
  onEnter,
  onVerify,
  enterText,
  verifyText
}: HomeProps) {
  return (
    <Container>
      <Cover src={coverSrc} />
      <Content>
        <Logo src={logoSrc} margin="0 0 80px 0" />
        <Heading size="large" align="center" margin="0 0 15px 0">
          {title}
        </Heading>
        <Paragraph align="center" variant="muted" margin="0 0 30px 0">
          {text}
        </Paragraph>
        <Button variant="primary" onClick={onEnter} margin="0 0 15px 0">
          {enterText}
        </Button>
        <Button onClick={onVerify}>{verifyText}</Button>
      </Content>
    </Container>
  )
}

export default Home
