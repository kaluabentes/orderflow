import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('footer')(css`
  padding: 20px;
  padding-bottom: 40px;
  text-align: center;
`)

export const PoweredBy = styled('footer')(css`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
`)

export const PoweredByLink = styled('a')(css`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-weight: bold;
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
  }
`)
