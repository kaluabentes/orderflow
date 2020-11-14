import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

import { inputStyles } from '../Input/styles'

export const Container = styled('div')(css`
  display: block;
  width: 100%;
`)

export const Field = styled('select')(inputStyles)
