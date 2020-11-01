import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('button')(css`
  border: 1px solid transparent;
  padding: 13px 20px;
  border-radius: 7px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 500;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px inset ${props => props.theme.colors.info};
    border-color: ${props => props.theme.colors.info};
  }

  ${props =>
    props.variant === 'default' &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
      background: white;
    `}

  ${props =>
    props.variant === 'primary' &&
    css`
      border-color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary};
      color: white;
    `}

  ${props =>
    props.variant === 'info' &&
    css`
      border-color: ${props => props.theme.colors.info};
      background: ${props => props.theme.colors.info};
      color: white;
    `}

  ${props =>
    props.variant === 'warning' &&
    css`
      border-color: ${props => props.theme.colors.warning};
      background: ${props => props.theme.colors.warning};
      color: white;
    `}
`)
