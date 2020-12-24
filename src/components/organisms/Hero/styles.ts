import { css } from 'styled-components'
import fadeInUp from '~/styles/animations/fadeInUp'

import styled from '~/styles/utils/styled'

export const OuterContainer = styled('div')(css`
  width: 100%;
  margin-bottom: 60px;
  margin-top: 70px;
  background-image: url("${props => props.coverSrc}");
  background-size: cover;
  background-position: center center;
  position: relative;

  ${props =>
    props.isSearchOpen &&
    css`
      margin-top: 163px;
    `}

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    margin-top: 73.99px;
  }
`)

export const Container = styled('div')(css`
  width: 100%;
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  color: white;
  z-index: 2;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 153px 20px 80px 20px;
  }
`)

export const Overlay = styled('div')(css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`)
