import styled from 'styled-components'

import createMultiple from './createMultiple'
import mixins from './mixins'

export default type => styles => styled(type)`
  ${styles}
  ${props => createMultiple(mixins(props))}
`
