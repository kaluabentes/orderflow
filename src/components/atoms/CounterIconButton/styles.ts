import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  position: relative;
  display: inline-block;
`)

export const Counter = styled('span')(css`
  background: ${props => props.backgroundColor};
  font-size: 0.7rem;
  font-weight: 700;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: -2px;
  top: -4px;
  color: ${props => props.textColor} !important;
  z-index: 1;
`)
