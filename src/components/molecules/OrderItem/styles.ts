import { css } from 'styled-components'

import styled from '~/styles/utils/styled'
import List from '../List'

export const Container = styled(List.Item)(css`
  padding: 20px 0;
`)

export const ContentGrid = styled('div')(css`
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.alignItems};
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`)

export const Description = styled('p')(css`
  margin: 0;
  line-height: 1.5em;
`)

export const Price = styled('p')(css`
  margin: 0;
  font-weight: 500;
  width: 100px;
  text-align: right;
`)
