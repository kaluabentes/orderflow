import { css } from 'styled-components'
import Color from 'color'
import Button from '~/components/atoms/Button'

import styled from '~/styles/utils/styled'
import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT } from './constants'

export const OuterContainer = styled('div')(css`
  background: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
`)

export const Container = styled('header')(css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  color: white;
  width: 100%;
  position: relative;

  & i {
    color: white;
  }

  ${props =>
    props.isSearchOpen &&
    css`
      padding: 5px;
    `}

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 20px 15px;
    width: auto;

    ${props =>
      props.isSearchOpen &&
      css`
        padding: 12.5px;
      `}
  }
`)

export const Nav = styled('nav')(css`
  display: block;
  position: fixed;
  display: flex;
  flex-direction: column;
  background: white;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  color: ${props => props.theme.colors.text};
  z-index: 10;
  transition: 0.5s;
  transform: translateX(-300px);

  ${props =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    position: static;
    flex-direction: row;
    height: auto;
    transform: translateX(0);
    background: transparent;
    margin-left: 75px;
    width: auto;
  }
`)

export const NavHeader = styled('header')(css`
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  font-size: 1.2rem;

  & i {
    color: ${props => props.theme.colors.textMuted} !important;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: none;
  }
`)

export const NavItem = styled(`button`)(css`
  color: ${props => props.theme.colors.textMuted};
  text-align: left;
  padding: 0;
  outline: 0;
  background: transparent;
  border: 0;
  padding: 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.isActive &&
    css`
      color: ${props => props.theme.colors.text};
      border-left: 5px solid ${props => props.theme.colors.primary};
      font-weight: 500;
    `}

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: 0;
    color: white;
    opacity: 0.6;
    margin-right: 20px;
    font-size: ${props => props.theme.typography.size.small};

    ${props =>
      props.isActive &&
      css`
        opacity: 1;
      `}
  }
`)

export const ProfileText = styled('p')(css`
  width: 30%;
  font-weight: 600;
  text-align: right;
  padding-right: 30px;
  color: white;
  font-size: 0.8rem;
`)

export const CountersContainer = styled('div')(css`
  display: flex;
`)

export const BrandLogo = styled('img')(css`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
`)

export const EditAddressContent = styled('div')(css`
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-size: 0.875rem;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    color: ${props => props.theme.colors.text};
    padding: 0;
    margin: 0;

    & i {
      margin-left: 10px;
    }
  }
`)

export const AddressTitle = styled('span')(css`
  font-size: 0.75rem;
  color: white;
  opacity: 0.7;
  font-weight: 400;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    color: ${props => props.theme.colors.textMuted};
    margin-bottom: 10px;
  }
`)

export const ActionsContainer = styled('div')(css`
  display: flex;
`)

export const EditAddressButton = styled(Button)(css`
  margin-left: 20px;
  color: white;
  width: auto !important;
  white-space: nowrap;
  cursor: pointer;
  padding: 9px 20px !important;
  text-align: left;
  transition: 0.3s;
  font-weight: 500;

  &:focus {
    outline: 0;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    position: fixed;
    left: 0;
    top: 70px;
    width: 100% !important;
    color: ${props => props.theme.colors.text};
    margin-left: 0 !important;
    background: white !important;
    padding: 15px 5px !important;
    z-index: 3;
    box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.05);
    border-radius: 0 !important;
  }
`)
