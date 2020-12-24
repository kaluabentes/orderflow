import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('footer')(css`
  padding: 40px;
  text-align: center;
`)

export const PoweredBy = styled('footer')(css`
  font-size: 0.9rem;
`)

export const PoweredByLink = styled('a')(css`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`)
