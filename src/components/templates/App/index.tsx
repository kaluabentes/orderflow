import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Box from '~/components/atoms/Box'
import Header from '~/components/organisms/Header'
import Cart from '~/state/Cart'
import Store from '~/state/Store'
import User from '~/state/User'
import { navItems } from '~/config/navigation'
import PageLoader from '~/components/organisms/PageLoader'
import useIsMobile from '~/utils/hooks/useIsMobile'
import { MOBILE_BREAKPOINT } from '~/components/organisms/Header/constants'
import { CommonProps } from '~/components/CommonProps'
import AddressWizard from '~/state/AddressWizard'

interface AppProps extends CommonProps {
  title: string
  onBack?: () => void
  isInnerPage?: boolean
  isHomePage?: boolean
}

function App({ children, title }: AppProps) {
  const addressWizard = AddressWizard.useContainer()
  const store = Store.useContainer()
  const cart = Cart.useContainer()
  const user = User.useContainer()
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  const { currentAddress, addresses: userAddresses } = user.state
  const address = currentAddress
    ? userAddresses.find(addr => addr.id === currentAddress)
    : undefined
  const addressText = address
    ? `${address.street}, ${address.number}`
    : undefined

  return (
    <>
      {store.isLoading && <PageLoader />}
      <Header
        onBack={() => router.back()}
        logoSrc={store.data.logo}
        title={title}
        userName={user.state.name}
        pathname={router.pathname}
        navItems={navItems}
        isSearchOpen={isSearchOpen}
        search={search}
        cartCount={cart.data.length}
        address={addressText}
        onAddressClick={addressWizard.open}
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
