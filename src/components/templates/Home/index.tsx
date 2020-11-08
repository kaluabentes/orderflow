import React from 'react'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Logo from '../../atoms/Logo'
import Paragraph from '../../atoms/Paragraph'
import FadeInUp from '../../atoms/FadeInUp'

import { Cover, Content } from './styles'
import Base from '../Base'

export const coverSrc =
  'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500'

interface HomeProps {
  coverSrc?: string
  logoSrc?: string
  title?: string
  text?: string
  onEnter: () => void
  onVerify: () => void
  enterLabel: string
  verifyLabel: string
}

function Home({
  coverSrc,
  logoSrc,
  title,
  text,
  onEnter,
  onVerify,
  enterLabel,
  verifyLabel
}: HomeProps) {
  return (
    <Base>
      <Cover src={coverSrc} />
      <Content>
        <Logo src={logoSrc} margin="0 0 40px 0" />
        <FadeInUp delay="0s">
          <Heading size="large" align="center" margin="0 0 15px 0">
            {title}
          </Heading>
        </FadeInUp>
        <FadeInUp delay="0.2s">
          <Paragraph align="center" variant="muted" margin="0 0 30px 0">
            {text}
          </Paragraph>
        </FadeInUp>
        <FadeInUp delay="0.4s">
          <Button variant="primary" onClick={onEnter} margin="0 0 20px 0">
            {enterLabel}
          </Button>
        </FadeInUp>
        <FadeInUp delay="0.6s">
          <Button onClick={onVerify}>{verifyLabel}</Button>
        </FadeInUp>
      </Content>
    </Base>
  )
}

export default Home
