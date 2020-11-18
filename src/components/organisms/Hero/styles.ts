import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const OuterContainer = styled('div')(css`
  background: ${props => props.theme.colors.primary};
  width: 100%;
`)

export const Container = styled('div')(css`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: white;
`)

export const EditAddressButton = styled('button')(css`
  background: transparent;
  border: 0;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 0;
  }

  & i {
    margin-left: 10px;
  }
`)

export const AddressTitle = styled('span')(css`
  font-size: 12px;
  color: white;
  opacity: 0.7;
`)
