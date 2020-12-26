import { css } from 'styled-components'
import Heading from '~/components/atoms/Heading'

import styled from '~/styles/utils/styled'

export const OuterContainer = styled('div')(css`
  background: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`)

export const Container = styled('header')(css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14.5px 20px;
  color: white;
  width: 100%;
  margin: 0 auto;

  & i {
    color: white;
  }

  ${props =>
    props.isSearchOpen &&
    css`
      padding: 5px;
    `}

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 20px;

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

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    position: static;
    flex-direction: row;
    height: auto;
    transform: translateX(0);
    background: transparent;
    margin-left: 75px;
  }
`)

export const NavHeader = styled('header')(css`
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  & i {
    color: ${props => props.theme.colors.textMuted} !important;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
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
  font-weight: 400;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.isActive &&
    css`
      color: ${props => props.theme.colors.text};
    `}

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    padding: 0;
    color: white;
    opacity: 0.7;
    margin-right: 30px;

    ${props =>
      props.isActive &&
      css`
        opacity: 1;
      `}
  }
`)

export const ProfileText = styled(Heading)(css`
  width: 40%;
  text-align: right;
  padding-right: 30px;
  font-weight: 400 !important;
  color: white;
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

  & i {
    margin-left: 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    color: ${props => props.theme.colors.textMuted};
    margin-bottom: 10px;
  }
`)

export const ActionsContainer = styled('div')(css`
  display: flex;
`)

export const EditAddressButton = styled('button')(css`
  width: 100%;
  margin-left: 40px;
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 0;
  text-align: left;
  transition: 0.3s;
  font-weight: 500;

  &:focus {
    outline: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    position: fixed;
    left: 0;
    top: 70px;
    width: 100%;
    color: ${props => props.theme.colors.text};
    margin-left: 0 !important;
    background: white;
    padding: 15px 20px;
    z-index: 3;
    box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.05);
  }
`)
