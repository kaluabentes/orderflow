import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

const Responsive = styled('div')(css`
  ${props => css`
    ${props.hideMaxWidth &&
    css`
      @media (max-width: ${props.hideMaxWidth}px) {
        display: none;
      }
    `}

    ${props.hideMinWidth &&
    css`
      @media (min-width: ${props.hideMinWidth}px) {
        display: none;
      }
    `}
  `}
`)

export default Responsive
