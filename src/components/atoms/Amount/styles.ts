import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  display: inline-flex;
  width: 85px;
  position: relative;
  justify-content: center;
  align-items: center;
`)

export const Button = styled('button')(css`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  color: ${props => props.theme.colors.text};
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: initial;
    `}
`)

export const ButtonLabel = styled('span')(css`
  display: block;
  transform: translateY(0.5px);
  font-weight: 600;
  font-size: 18px;
`)

export const Count = styled('span')(css`
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
`)
