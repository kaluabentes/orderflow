import { css } from 'styled-components'
import fadeInUp from '~/styles/animations/fadeInUp'

import styled from '~/styles/utils/styled'

export const OuterContainer = styled('div')(css`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  margin-bottom: 40px;
`)

export const Container = styled('div')(css`
  width: 100%;
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px 40px 20px;
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
  ${fadeInUp}

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
  ${fadeInUp}
`)
