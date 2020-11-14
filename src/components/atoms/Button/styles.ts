import { css } from 'styled-components'
import Color from 'color'

import styled from '../../../styles/utils/styled'
import DotLoader from '../DotLoader'

export const Loader = styled(DotLoader)(css``)

export const Container = styled('button')(css`
  border: 1px solid transparent;
  padding: 13px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 500;
  font-size: 0.875rem;
  transition: 0.5s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px inset ${props => props.theme.colors.info};
    border-color: ${props => props.theme.colors.info};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.8;
      cursor: default;
    `}

  ${props =>
    props.variant === 'default' &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
      background: white;

      &:hover {
        background: rgba(160, 160, 160, 0.1);
      }
    `}

  ${props =>
    props.variant === 'primary' &&
    css`
      border-color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary};
      color: white;

      &:hover {
        background: ${props =>
          Color(props.theme.colors.primary).darken(0.1).hex()};
      }

      & ${Loader} {
        & div {
          background: white;
        }
      }
    `}

  ${props =>
    props.variant === 'info' &&
    css`
      border-color: ${props => props.theme.colors.info};
      background: ${props => props.theme.colors.info};
      color: white;

      &:hover {
        background: ${props =>
          Color(props.theme.colors.info).darken(0.1).hex()};
      }

      & ${Loader} {
        & div {
          background: white;
        }
      }
    `}

  ${props =>
    props.variant === 'warning' &&
    css`
      border-color: ${props => props.theme.colors.warning};
      background: ${props => props.theme.colors.warning};
      color: white;

      &:hover {
        background: ${props =>
          Color(props.theme.colors.warning).darken(0.1).hex()};
      }

      & ${Loader} {
        & div {
          background: white;
        }
      }
    `}
`)
