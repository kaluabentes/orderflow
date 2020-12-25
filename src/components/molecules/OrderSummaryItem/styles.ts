import { css } from 'styled-components'

import styled from '~/styles/utils/styled'
import List from '../List'

export const Container = styled(List.Item)(css``)

export const ContentGrid = styled('div')(css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`)

export const Description = styled('p')(css`
  margin: 0;
  line-height: 1.5em;
`)

export const Price = styled('p')(css`
  margin: 0;
  font-weight: 600;
  width: 100px;
  text-align: right;
`)
