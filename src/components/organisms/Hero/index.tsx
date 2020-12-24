import FadeInUp from '~/components/atoms/FadeInUp'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Logo from '~/components/atoms/Logo'
import getString from '~/i18n/getString'
import { OuterContainer, Container, Overlay } from './styles'

interface HeroProps {
  logoSrc: string
  isSearchOpen?: boolean
  coverSrc: string
}

function Hero({ logoSrc, isSearchOpen = false, coverSrc }: HeroProps) {
  return (
    <OuterContainer isSearchOpen={isSearchOpen} coverSrc={coverSrc}>
      <Container>
        <Logo margin="0 0 30px 0" src={logoSrc} />
        <FadeInUp>
          <Heading size="large" align="center">
            {process.env.STORE_NAME}
          </Heading>
        </FadeInUp>
      </Container>
      <Overlay />
    </OuterContainer>
  )
}

export default Hero
