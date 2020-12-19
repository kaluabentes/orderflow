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
  padding: 20px;
  color: white;
  width: 100%;
  margin: 0 auto;

  & i {
    color: white;
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
  color: black;
  z-index: 10;
  transition: 0.5s;
  transform: translateX(-300px);

  ${props =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 769px) {
    position: static;
    flex-direction: row;
    height: auto;
    transform: translateX(0);
    background: transparent;
    margin-left: 75px;
  }
`)

export const NavHeader = styled('header')(css`
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  & i {
    color: ${props => props.theme.colors.textMuted} !important;
  }

  @media (min-width: 769px) {
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

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.isActive &&
    css`
      color: black;
    `}

  @media (min-width: 769px) {
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
  width: 100%;
  text-align: right;
  padding-right: 30px;
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
