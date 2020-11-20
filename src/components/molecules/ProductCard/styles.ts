import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('button')(css`
  display: flex;
  text-align: left;
  background: white;
  border: 0;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }
`)

export const Image = styled('img')(css`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`)

export const Content = styled(`div`)(css``)

export const Title = styled(`h4`)(css`
  margin: 0 0 10px 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4em;
`)

export const Description = styled(`p`)(css`
  margin: 0 0 15px 0;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.4em;
`)

export const Price = styled('p')(css`
  margin: 0;
  font-weight: bold;
`)
