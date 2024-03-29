import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('div')(css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`)

export const Content = styled('div')(css`
  background: white;
  height: 100vh;
  width: 100%;
  overflow: auto;

  @media (min-width: 600px) {
    max-width: 400px;
    margin-bottom: 50px;
    margin-top: 50px;
    overflow: hidden;
    border-radius: 10px;
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
