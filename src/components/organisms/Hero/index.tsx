import React from 'react'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Logo from '../../atoms/Logo'
import Paragraph from '../../atoms/Paragraph'
import FadeInUp from '../../atoms/FadeInUp'

import { Cover, Content } from './styles'
import getString from '~/i18n/getString'
import Overlay from '~/components/atoms/Overlay'
import Box from '~/components/atoms/Box'

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
    <Box position="relative">
      <Cover src={coverSrc} />
      <Overlay bottom="0px" />
      <Content>
        <Logo src={logoSrc} margin="0 0 20px 0" />
        <FadeInUp delay="0s">
          <Heading fontSize="xxlarge" align="center" margin="0 0 5px 0">
            {title}
          </Heading>
        </FadeInUp>
        <FadeInUp delay="0.2s">
          <Paragraph
            color="white"
            align="center"
            variant="muted"
            fontWeight="500"
          >
            {getString('app.welcome.text')}
          </Paragraph>
        </FadeInUp>
      </Content>
    </Box>
  )
}

export default Welcome
