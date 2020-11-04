import { css, keyframes } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Cover = styled('img')(css`
  object-fit: cover;
  width: 100%;
  height: 220px;
  margin-bottom: -110px;
`)

export const Content = styled('div')(css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    padding: 40px;
  }
`)
