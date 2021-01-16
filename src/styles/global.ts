import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

import fonts from './fonts'

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.typography.fontFamily};
  }

  body {
    padding: 0 !important;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background}
  }

  strong {
    color: ${props => props.theme.colors.text};
  }
`
