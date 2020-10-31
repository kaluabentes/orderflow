import styled from 'styled-components'
import margin from './margin'

export default type => styles => styled(type)`
  ${styles}

  // Extension styles
  ${margin}
`
