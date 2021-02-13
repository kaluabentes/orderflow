import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

const Responsive = styled('div')(css`
  ${props => css`
    ${props.maxWidth &&
    css`
      @media (max-width: ${props.maxWidth}px) {
        display: none;
      }
    `}

    ${props.minWidth &&
    css`
      @media (min-width: ${props.minWidth}px) {
        display: none;
      }
    `}
  `}
`)

export default Responsive
