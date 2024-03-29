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
  transition: 0.2s;
  text-align: center;
  text-decoration: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${props =>
    props.isActive &&
    css`
      border: 2px solid ${props => props.theme.colors.primary} !important;
    `}

  ${props =>
    props.isInline &&
    css`
      display: inline-block;
      width: auto;
    `}

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
      color: ${props => props.theme.colors.text};

      &:hover {
        background: rgba(160, 160, 160, 0.1);
      }
    `}

  ${props =>
    props.variant === 'defaultDark' &&
    css`
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: transparent;
      color: white;
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

      ${props =>
        props.outlined &&
        css`
          border: 1px solid rgba(255, 255, 255, 0.4);

          &:hover {
            background: transparent;
            border-color: white;
          }
        `}
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

    ${props =>
      props.variant === 'success' &&
      css`
        border-color: ${props => props.theme.colors.success};
        background: ${props => props.theme.colors.success};
        color: white;

        &:hover {
          background: ${props =>
            Color(props.theme.colors.success).darken(0.1).hex()};
        }

        & ${Loader} {
          & div {
            background: white;
          }
        }
      `}

    ${props =>
      props.background &&
      css`
        &:hover {
          background: ${props => Color(props.background).darken(0.1).hex()};
        }
      `}
`)
