import { css } from 'styled-components'
import List from '~/components/molecules/List'

import styled from '~/styles/utils/styled'

export const Container = styled('section')(css`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${props =>
    props.isFixed &&
    css`
      position: fixed;
      top: 75px;
      z-index: 10;
      transform: translateX(825px);
      max-height: calc(100% - 75px);
    `}

  @media(min-width: 1024px) {
    padding: 30px;
  }
`)

export const Scroller = styled('div')(css`
  flex: 1;
  overflow: auto;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${props =>
    !props.isFixed &&
    css`
      border-bottom: 0;
      margin-bottom: 0;
    `}
`)

export const Title = styled('h3')(css`
  margin: 0 0 15px 0;
  font-size: ${props => props.theme.typography.size.medium};
`)

export const Summary = styled('div')(css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  ${props =>
    !props.isFixed &&
    css`
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding-top: 20px;
    `}
`)

export const SubtotalLabel = styled('p')(css`
  margin: 0 0 10px 0;
  font-weight: 500;
`)

export const TotalLabel = styled('p')(css`
  margin: 0;
  font-weight: 600;
`)
