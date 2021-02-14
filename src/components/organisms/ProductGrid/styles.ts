import { css } from 'styled-components'
import IconButton from '~/components/atoms/IconButton'

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
  font-size: ${props => props.theme.typography.size.medium};
  font-weight: 500;
`)

export const Grid = styled('div')(css`
  display: grid;
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${props =>
    !props.isExpanded &&
    css`
      height: 0;
      overflow: hidden;
    `}
`)

export const Header = styled('button')(css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;

  ${props =>
    !props.isExpanded &&
    css`
      border-bottom: 2px solid rgba(0, 0, 0, 0.08);
    `}
`)

export const ExpandButton = styled(IconButton)(css``)
