import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('section')(css`
  width: 100%;
  margin: 0 0 30px 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`)

export const Title = styled('h3')(css`
  margin: 0 0 20px 0;
  font-size: 25px;
`)

export const Grid = styled('div')(css`
  display: grid;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`)
