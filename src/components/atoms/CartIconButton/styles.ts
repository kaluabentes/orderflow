import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  position: relative;
  display: inline-block;
`)

export const Counter = styled('span')(css`
  background: #00ff00;
  font-size: 12px;
  font-weight: 500;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -10px;
  color: black !important;
  z-index: 1;
`)
