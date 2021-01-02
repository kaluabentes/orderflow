import styled from 'styled-components'

import margin from './mixins/margin'
import align from './mixins/align'
import padding from './mixins/padding'
import color from './mixins/color'
import flex from './mixins/flex'
import fontSize from './mixins/fontSize'

export default type => styles => styled(type)`
  ${styles}
  ${margin}
  ${padding}
  ${align}
  ${color}
  ${flex}
  ${fontSize}
`
