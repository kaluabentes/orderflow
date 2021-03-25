import { css } from 'styled-components'
import theme from '~/styles/theme'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  @media (min-width: ${theme.breakpoints.desktop}px) {
    display: flex;
  }
`)

export const Header = styled('header')(css`
  height: 70px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  display: flex;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: 260px;
    height: 100vh;
  }
`)

export const Main = styled('main')(css`
  width: 100%;
`)
