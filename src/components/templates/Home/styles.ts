import { css } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Container = styled('div')(css`
  display: flex;
  flex-direction: column;
  align-items: center;
`)

export const Cover = styled('img')(css`
  object-fit: cover;
  width: 100%;
  height: 250px;
  margin-bottom: -100px;
`)

export const Content = styled('div')(css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    max-width: 400px;
    padding-bottom: 100px;
  }
`)
