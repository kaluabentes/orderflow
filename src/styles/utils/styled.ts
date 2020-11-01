import styled from 'styled-components'

import { margin, align } from './mixins'

export default type => styles => styled(type)`
  ${styles}
  ${margin}
  ${align}
`
