import React, { useState, useEffect } from 'react'
import { Portal } from 'react-portal'

import CounterIconButton from '~/components/atoms/CounterIconButton'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import useIsMobile from '~/utils/hooks/useIsMobile'
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
import useIsMounted from '~/utils/hooks/useIsMounted'

interface NavItem {
  path: string
  label: string
}

interface HeaderProps {
  title: string
  logoSrc: string
  profileText: string
  currentPath: string
  navItems: NavItem[]
  cartCount: string | number
  address: string
  searchValue: string
  isSearchOpen: boolean
  onSearchOpen: () => void
  onSearchClose: () => void
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Header({
  title,
  navItems,
  profileText,
  currentPath,
  cartCount,
  logoSrc,
  address,
  searchValue,
  isSearchOpen,
  onSearchOpen,
  onSearchClose,
  onAddressClick,
  onSearchChange,
  onNavClick,
  onCartClick
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useIsMobile()
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

  function renderSearchInput(hasCloseButton) {
    return (
      <SearchInput
        value={searchValue}
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
      >
        <AddressTitle>{getString('app.hero.addressTitle')}</AddressTitle>
        <EditAddressContent onClick={onAddressClick}>
          {address} <Icon name="edit" />
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
      <Container isSearchOpen={isSearchOpen}>
        {!isMobile && <BrandLogo src={logoSrc} alt="" />}
        {isMounted && (
          <Nav isOpen={isOpen}>
            <NavHeader>
              <Heading as="h2">{profileText}</Heading>
              <IconButton onClick={() => setIsOpen(false)} name="close" />
            </NavHeader>
            {navItems.map(item => (
              <NavItem
                key={item.label}
                type="button"
                isActive={currentPath === item.path}
                onClick={() => onNavClick(item.path)}
              >
                {item.label}
              </NavItem>
            ))}
          </Nav>
        )}
        {!isMobile && renderSearchInput(searchValue)}
        {isMobile && isSearchOpen && renderSearchInput(true)}
        {renderAddressSection()}
        {isMobile && !isSearchOpen && (
          <>
            <IconButton name="sort" onClick={() => setIsOpen(true)} />
            <Heading margin="0 -45px 0 0">{title}</Heading>
          </>
        )}
        {!isMobile && <ProfileText>{profileText}</ProfileText>}
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
