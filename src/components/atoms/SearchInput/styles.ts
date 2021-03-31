import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0 15px;
  width: 100%;
  color: rgba(255, 255, 255, 1);
  position: relative;

  ${props =>
    props.variant === 'light' &&
    css`
      background: rgba(0, 0, 0, 0.05);
      color: ${props => props.theme.colors.text};
    `}
`)

export const Input = styled('input')(css`
  background: transparent;
  border: 0;
  outline: 0;
  width: 100%;
  margin-left: 10px;
  height: 45px;
  color: white;

  ${props =>
    props.variant === 'light' &&
    css`
      color: ${props => props.theme.colors.text};
    `}
`)

export const Placeholder = styled('p')(css`
  margin: 0;
  position: absolute;
  left: 50px;
  font-weight: 500;
  width: ${props => props.width};
  color: rgba(255, 255, 255, 0.5);

  ${props =>
    props.variant === 'light' &&
    css`
      color: ${props => props.theme.colors.textMuted};
    `};
`)
