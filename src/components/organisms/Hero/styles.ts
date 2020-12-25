import { css } from 'styled-components'
import fadeInUp from '~/styles/animations/fadeInUp'

import styled from '~/styles/utils/styled'

const headerHeight = 70
const addressHeight = 73

export const OuterContainer = styled('div')(css`
  width: 100%;
  margin-bottom: 30px;
  background-image: url("${props => props.coverSrc}");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-top: ${headerHeight}px;

  ${props =>
    props.isSearchOpen &&
    css`
      margin-top: 163px;
    `}

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin-top: ${headerHeight + addressHeight}px;
  }
`)

export const Container = styled('div')(css`
  width: 100%;
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 2;
  position: relative;
  padding: 30px 20px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
  }
`)

export const Overlay = styled('div')(css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
  top: 0;
  left: 0;
  z-index: 1;
`)

export const Heading = styled('h2')(css`
  font-size: 30px;
  color: white;
  text-align: center;
  margin: 0;
`)
