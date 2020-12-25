import styled from 'styled-components'

import { margin, align, padding, color, flex } from './mixins'

export default type => styles => styled(type)`
  ${styles}
  ${margin}
  ${padding}
  ${align}
  ${color}
  ${flex}
`
