import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'
import IconButton from '../../atoms/IconButton'

export const Container = styled('div')(css`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: white;

  @media (min-width: 600px) {
    max-width: 400px;
    margin-bottom: 100px;
    padding: 40px;
    border-radius: 7px;
  }
`)

export const OuterContainer = styled('div')(css`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    height: 100vh;
    background: ${props => props.theme.colors.background};
  }
`)

export const CustomIconButton = styled(IconButton)(css`
  transform: translateX(-12px);
`)
