import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  position: relative;
  display: inline-block;
  padding-top: 5px;
  padding-right: 3px;
`)

export const Counter = styled('span')(css`
  background: #00ff00;
  font-size: 10px;
  font-weight: 500;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 0px;
`)
