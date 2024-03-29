import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Box from '~/components/atoms/Box'
import Header from '~/components/organisms/Header'
import Cart from '~/state/Cart'
import Store from '~/state/Store'
import User from '~/state/User'
import { navItems } from '~/config/navigation'
import PageLoader from '~/components/organisms/PageLoader'
import useIsMobile from '~/utils/useIsMobile'
import { MOBILE_BREAKPOINT } from '~/components/organisms/Header/constants'
import { CommonProps } from '~/styles/utils/CommonProps'
import Modals from '~/state/Modal'
import theme from '~/styles/theme'
import Icon from '~/components/atoms/Icon'
import Paragraph from '~/components/atoms/Paragraph'

interface AppProps extends CommonProps {
  title: string
  onBack?: () => void
  isInnerPage?: boolean
  isHomePage?: boolean
  showAddress?: boolean
}

function App({
  children,
  title,
  onBack = undefined,
  showAddress = false
}: AppProps) {
  const modals = Modals.useContainer()
  const store = Store.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  const address = user.getCurrentAddress()
  const addressText = address && address.title
  const profileItem = {
    label: 'Perfil',
    path: '/profile'
  }

  return (
    <>
      {!store.data.logo ? (
        <PageLoader />
      ) : (
        <>
          <Header
            onBack={onBack || (() => router.back())}
            logoSrc={store.data.logo}
            title={title}
            userName={user.state.name}
            pathname={router.pathname}
            navItems={isMobile ? [...navItems, profileItem] : navItems}
            isSearchOpen={isSearchOpen}
            search={search}
            cartCount={cart.data.length}
            address={addressText}
            onAddressClick={() => modals.open('AddressModal')}
            onNavClick={path => router.push(path)}
            onCartClick={() => router.push('/cart')}
            onSearchOpen={() => setIsSearchOpen(true)}
            onSearchClose={() => setIsSearchOpen(false)}
            onSearchChange={event => setSearch(event.target.name)}
            onProfileClick={() => router.push('/profile')}
            onLogin={() => modals.open('LoginModal')}
            showAddress={showAddress}
          />
          <Box
            display="flex"
            margin={`${showAddress && isMobile ? 126 : 75}px 0 0 0`}
          >
            {children}
          </Box>
          <Box
            as="footer"
            padding="0 0 30px 0"
            textAlign="center"
            fontSize="0.875rem"
          >
            <Box as="span" width="auto" color="rgba(0, 0, 0, 0.5)">
              Feito com{' '}
            </Box>{' '}
            <a
              style={{
                color: theme.colors.primary,
                textDecoration: 'none',
                fontWeight: 600
              }}
              href="https://orderflow.io"
              target="_blank"
            >
              Orderflow
            </a>
            .
          </Box>
        </>
      )}
    </>
  )
}

export default App
