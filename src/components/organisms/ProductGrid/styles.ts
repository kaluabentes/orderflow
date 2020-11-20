import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('section')(css``)

export const Title = styled('h3')(css`
  margin: 0 0 20px 0;
`)

export const Grid = styled('div')(css`
  display: grid;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`)
