import React, { useState, useEffect } from 'react'
import { Portal } from 'react-portal'

import CounterIconButton from '~/components/atoms/CounterIconButton'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import useIsMobile from '~/utils/useIsMobile'
import SearchInput from '~/components/atoms/SearchInput'

import {
  OuterContainer,
  Container,
  Nav,
  NavItem,
  NavHeader,
  ProfileText,
  CountersContainer,
  BrandLogo,
  EditAddressButton,
  AddressTitle,
  ActionsContainer,
  EditAddressContent
} from './styles'
import getString from '~/i18n/getString'
import Icon from '~/components/atoms/Icon'
import useIsMounted from '~/utils/useIsMounted'
import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import { MOBILE_BREAKPOINT } from './constants'
import theme from '~/styles/theme'

interface NavItem {
  path: string
  label: string
}

interface HeaderProps {
  title: string
  logoSrc: string
  userName: string
  pathname: string
  navItems: NavItem[]
  cartCount: string | number
  address: string
  search: string
  showAddress?: boolean
  isSearchOpen: boolean
  onSearchOpen: () => void
  onSearchClose: () => void
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
  onProfileClick: () => void
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onLogin: () => void
  onBack?: () => void
}

function Header({
  showAddress,
  title,
  navItems,
  userName,
  pathname,
  cartCount,
  logoSrc,
  address,
  search,
  isSearchOpen,
  onSearchOpen,
  onSearchClose,
  onAddressClick,
  onProfileClick,
  onSearchChange,
  onNavClick,
  onCartClick,
  onLogin,
  onBack
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)
  const isMounted = useIsMounted()

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsScrolled(true)
        return
      }

      setIsScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleOnSearchClose() {
    onSearchClose()
  }

  function handleLeftIconClick() {
    if (pathname === '/') {
      setIsOpen(true)
      return
    }

    onBack()
  }

  function renderSearchInput(hasCloseButton) {
    return (
      <SearchInput
        value={search}
        onChange={onSearchChange}
        onClose={handleOnSearchClose}
        hasCloseButton={hasCloseButton}
        margin={!isSearchOpen ? '0 0 0 20px' : null}
        placeholder="O que você deseja?"
      />
    )
  }

  function renderAddressSection() {
    const component = (
      <EditAddressButton
        isScrolled={isScrolled}
        isMobile={isMobile}
        isSearchOpen={isSearchOpen}
        variant="primary"
        outlined
        onClick={onAddressClick}
      >
        <EditAddressContent>
          <Icon margin="0 5px 0 -3px" name="room" />
          {address || 'Selecionar endereço'}
        </EditAddressContent>
      </EditAddressButton>
    )

    if (isMobile) {
      return <Portal>{component}</Portal>
    }

    return component
  }

  return (
    <OuterContainer>
      <Container maxWidth={theme.layout.maxWidth} isSearchOpen={isSearchOpen}>
        {!isMobile && <BrandLogo src={logoSrc} alt="" />}
        {isMounted && (
          <Nav isOpen={isOpen}>
            <NavHeader>
              <Heading fontSize="medium" as="h2">
                {userName ? (
                  `${getString('app.home.greeting')}, ${userName}`
                ) : (
                  <Button onClick={onLogin}>{getString('login')}</Button>
                )}
              </Heading>
              <IconButton onClick={() => setIsOpen(false)} name="close" />
            </NavHeader>
            {navItems.map(item => (
              <NavItem
                key={item.label}
                type="button"
                isActive={pathname === item.path}
                onClick={() => onNavClick(item.path)}
              >
                {item.label}
              </NavItem>
            ))}
          </Nav>
        )}
        {!isMobile && renderSearchInput(search.length > 0)}
        {isMobile && isSearchOpen && renderSearchInput(true)}
        {!isMobile && renderAddressSection()}
        {isMobile && showAddress && renderAddressSection()}
        {isMobile && !isSearchOpen && (
          <>
            <IconButton
              name={pathname === '/' ? 'sort' : 'arrow_back'}
              onClick={handleLeftIconClick}
            />
            <Heading
              fontWeight="500"
              fontSize="20px"
              margin="0 0 0 20px"
              color="white"
              flex="1"
            >
              {title}
            </Heading>
          </>
        )}
        {!isMobile &&
          (userName ? (
            <IconButton
              onClick={onProfileClick}
              margin="0 15px 0 20px"
              name="person"
            />
          ) : (
            <Box display="flex" width="100px" margin="0 15px">
              <Button outlined variant="primary" onClick={onLogin}>
                {getString('login')}
              </Button>
            </Box>
          ))}
        <ActionsContainer>
          {isMobile && !isSearchOpen && (
            <IconButton
              onClick={onSearchOpen}
              margin="0 20px 0 0"
              name="search"
            />
          )}
          {!isSearchOpen && (
            <CountersContainer>
              <CounterIconButton
                name="shopping_cart"
                count={cartCount}
                onClick={onCartClick}
              />
            </CountersContainer>
          )}
        </ActionsContainer>
      </Container>
    </OuterContainer>
  )
}

export default Header
