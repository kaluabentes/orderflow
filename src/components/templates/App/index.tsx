import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Box from '~/components/atoms/Box'
import Header from '~/components/organisms/Header'
import Cart from '~/containers/Cart'
import Store from '~/containers/Store'
import User from '~/containers/User'
import { navItems } from '~/config/navigation'
import PageLoader from '~/components/organisms/PageLoader'
import useIsMobile from '~/utils/hooks/useIsMobile'
import { MOBILE_BREAKPOINT } from '~/components/organisms/Header/constants'
import { CommonProps } from '~/components/CommonProps'

interface AppProps extends CommonProps {
  title: string
  onBack?: () => void
  isInnerPage?: boolean
  isHomePage?: boolean
}

function App({
  children,
  title,
  onBack,
  isInnerPage = false,
  isHomePage = false
}: AppProps) {
  const store = Store.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  const { street, number } = user.data.currentAddress
  const address = street && number ? `${street}, ${number}` : undefined

  return (
    <>
      {store.isLoading && <PageLoader />}
      <Header
        logoSrc={store.data.logo}
        title={title}
        userName={user.data.name}
        pathname={router.pathname}
        navItems={navItems}
        isSearchOpen={isSearchOpen}
        search={search}
        cartCount={cart.data.length}
        address={address}
        onAddressClick={() => alert('onAddressClick')}
        onNavClick={path => router.push(path)}
        onCartClick={() => router.push('/cart')}
        onSearchOpen={() => setIsSearchOpen(true)}
        onSearchClose={() => setIsSearchOpen(false)}
        onSearchChange={event => setSearch(event.target.name)}
        onLogin={() => alert('onLogin')}
      />
      <Box margin={`${isMobile ? 126 : 75}px 0 0 0`}>{children}</Box>
    </>
  )
}

export default App
