import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  background: white;
  display: flex;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  width: 100%;

  & i {
    color: rgba(0, 0, 0, 0.3);
  }
`)

export const Input = styled('input')(css`
  background: transparent;
  border: 0;
  outline: 0;
  width: 100%;
  margin-left: 10px;
  height: 50px;
`)
