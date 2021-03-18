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

  return (
    <>
      {store.isLoading && <PageLoader />}
      <Header
        onBack={onBack || (() => router.back())}
        logoSrc={store.data.logo}
        title={title}
        userName={user.state.name}
        pathname={router.pathname}
        navItems={navItems}
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
        onLogin={() => modals.open('LoginModal')}
        showAddress={showAddress}
      />
      <Box margin={`${showAddress && isMobile ? 126 : 75}px 0 0 0`}>
        {children}
      </Box>
    </>
  )
}

export default App
