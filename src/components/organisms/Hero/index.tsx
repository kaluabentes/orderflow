import FadeInUp from '~/components/atoms/FadeInUp'
import Icon from '~/components/atoms/Icon'
import Logo from '~/components/atoms/Logo'
import getString from '~/i18n/getString'
import { OuterContainer, Container, Overlay, Heading, Image } from './styles'

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
          <Heading>{process.env.STORE_NAME}</Heading>
        </FadeInUp>
      </Container>
      <Image src={coverSrc} alt="" />
      <Overlay />
    </OuterContainer>
  )
}

export default Hero
