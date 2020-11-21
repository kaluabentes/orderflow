import FadeInUp from '~/components/atoms/FadeInUp'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Logo from '~/components/atoms/Logo'
import SearchInput from '~/components/atoms/SearchInput'
import getString from '~/i18n/getString'
import {
  OuterContainer,
  Container,
  EditAddressButton,
  AddressTitle
} from './styles'

interface HeroProps {
  logoSrc: string
  address: string
  search?: string
  onAddressClick: () => void
  onSearchChange?: () => void
}

function Hero({
  logoSrc,
  address,
  search,
  onAddressClick,
  onSearchChange
}: HeroProps) {
  return (
    <OuterContainer>
      <Container>
        <Logo margin="0 0 30px 0" src={logoSrc} />
        <FadeInUp>
          <Heading size="large" margin="0 0 30px 0" align="center">
            {process.env.STORE_NAME}
          </Heading>
        </FadeInUp>
        <AddressTitle delay="1s">
          {getString('app.hero.addressTitle')}
        </AddressTitle>
        <EditAddressButton delay="1s" onClick={onAddressClick}>
          {address} <Icon name="edit" />
        </EditAddressButton>
        <SearchInput
          onChange={onSearchChange}
          value={search}
          placeholder={getString('app.hero.searchPlaceholder')}
          margin="0 0 -65px 0"
        />
      </Container>
    </OuterContainer>
  )
}

export default Hero
