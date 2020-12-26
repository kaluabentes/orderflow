import React from 'react'

import Button from '../../../components/atoms/Button'
import Heading from '../../../components/atoms/Heading'
import Logo from '../../../components/atoms/Logo'
import Paragraph from '../../../components/atoms/Paragraph'
import FadeInUp from '../../../components/atoms/FadeInUp'

import { Cover, Content } from './styles'
import Base from '../Base'
import getString from '~/i18n/getString'

export const coverSrc =
  'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500'

interface WelcomeProps {
  coverSrc?: string
  logoSrc?: string
  title?: string
  onEnter: () => void
  onVerify: () => void
}

function Welcome({
  coverSrc,
  logoSrc,
  title,
  onEnter,
  onVerify
}: WelcomeProps) {
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
            {getString('app.welcome.text')}
          </Paragraph>
        </FadeInUp>
        <FadeInUp delay="0.4s">
          <Button variant="primary" onClick={onEnter} margin="0 0 20px 0">
            {getString('app.welcome.enterLabel')}
          </Button>
        </FadeInUp>
        <FadeInUp delay="0.6s">
          <Button onClick={onVerify}>
            {getString('app.welcome.verifyLabel')}
          </Button>
        </FadeInUp>
      </Content>
    </Base>
  )
}

export default Welcome
