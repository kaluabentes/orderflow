import FadeInUp from '~/components/atoms/FadeInUp'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Logo from '~/components/atoms/Logo'
import getString from '~/i18n/getString'
import { OuterContainer, Container } from './styles'

interface HeroProps {
  logoSrc: string
  isSearchOpen: boolean
}

function Hero({ logoSrc, isSearchOpen }: HeroProps) {
  return (
    <OuterContainer isSearchOpen={isSearchOpen}>
      <Container>
        <Logo margin="0 0 30px 0" src={logoSrc} />
        <FadeInUp>
          <Heading size="large" align="center">
            {process.env.STORE_NAME}
          </Heading>
        </FadeInUp>
      </Container>
    </OuterContainer>
  )
}

export default Hero
