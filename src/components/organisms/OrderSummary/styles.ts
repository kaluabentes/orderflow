import { css } from 'styled-components'
import List from '~/components/molecules/List'

import styled from '~/styles/utils/styled'

export const Container = styled('section')(css`
  background: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 400px;

  ${props =>
    props.isFixed &&
    css`
      position: fixed;
      top: 74px;
      z-index: 10;
      transform: translateX(825px);
      border-radius: 0;
      max-height: calc(100% - 74px);
      overflow: auto;
    `}
`)

export const Title = styled('h3')(css`
  margin: 0 0 20px 0;
  font-size: 25px;
`)

export const Summary = styled('div')(css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`)

export const SubtotalLabel = styled('p')(css`
  margin: 0 0 10px 0;
`)

export const TotalLabel = styled('p')(css`
  margin: 0;
  font-weight: 600;
`)
