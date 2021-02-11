import { css, keyframes } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Cover = styled('img')(css`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
`)

export const Content = styled('div')(css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 2;
  position: relative;
  color: white;
  padding: 80px 20px;
`)
