import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('button')(css`
  position: relative;
  display: inline-flex;
  background: transparent;
  border: 0;
  padding: 0;
  outline: 0;

  & i {
    font-size: 30px;
  }
`)

export const Counter = styled('span')(css`
  background: ${props => props.backgroundColor};
  font-size: 0.7rem;
  font-weight: 600;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: -4px;
  top: -8px;
  color: ${props => props.textColor} !important;
  z-index: 1;
`)
