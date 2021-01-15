import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('ul')(css`
  list-style: none;
  margin: 0;
  padding: 0;
`)

export const Item = styled('li')(css`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-of-type {
    border: none;
  }
`)
