import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.typography.fontFamily};
  }
`
