import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('div')(css`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`)

export const Content = styled('div')(css`
  background: white;
  height: 100vh;
  overflow: auto;

  @media (min-width: 600px) {
    width: 100%;
    max-width: 400px;
    margin-bottom: 50px;
    margin-top: 50px;
    overflow: hidden;
    border-radius: 15px;
    height: auto;
  }

  ${props =>
    props.hasPadding &&
    css`
      padding: 20px;

      @media (min-width: 600px) {
        padding: 40px;
      }
    `}
`)
