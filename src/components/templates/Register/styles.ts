import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const AddressGrid = styled('div')(css`
  display: flex;

  & div:nth-child(1) {
    flex: 1 auto;
    margin-right: 20px;
  }

  & div:nth-child(2) {
    flex: 1 auto;
    max-width: 80px;
  }
`)
