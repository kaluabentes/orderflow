import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

const Actionable = styled('button')(css`
  display: inline-block;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
`)

export default Actionable
