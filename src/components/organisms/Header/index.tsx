import React, { useState, useEffect } from 'react'

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
  EditAddressContainer,
  EditAddressButton,
  AddressTitle,
  ActionsContainer
} from './styles'
import getString from '~/i18n/getString'
import Icon from '~/components/atoms/Icon'

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
  onNavClick: (path) => void
  onCartClick: () => void
  onAddressClick: () => void
  onSearchChange: (event: React.ChangeEvent) => void
  onClose: () => void
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
  onAddressClick,
  onClose,
  onSearchChange,
  onNavClick,
  onCartClick
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isMobile = useIsMobile()

  function handleOnSearchClose() {
    onClose()
    setIsSearchOpen(false)
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

  return (
    <OuterContainer>
      <Container>
        {!isMobile && <BrandLogo src={logoSrc} alt="" />}
        <Nav isOpen={isOpen}>
          <NavHeader>
            <Heading size="medium" variant="h2">
              {profileText}
            </Heading>
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
        {!isMobile && renderSearchInput(searchValue)}
        {isMobile && isSearchOpen && renderSearchInput(true)}
        {!isMobile && (
          <>
            <EditAddressContainer>
              <AddressTitle>{getString('app.hero.addressTitle')}</AddressTitle>
              <EditAddressButton onClick={onAddressClick}>
                {address} <Icon name="edit" />
              </EditAddressButton>
            </EditAddressContainer>
          </>
        )}
        {isMobile && !isSearchOpen && (
          <>
            <IconButton name="sort" onClick={() => setIsOpen(true)} />
            <Heading margin="0 -45px 0 0" size="medium">
              {title}
            </Heading>
          </>
        )}
        {!isMobile && (
          <ProfileText size="small" variant="h2">
            {profileText}
          </ProfileText>
        )}
        <ActionsContainer>
          {isMobile && !isSearchOpen && (
            <IconButton
              onClick={() => setIsSearchOpen(true)}
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
