import { css } from 'styled-components'

import styled from "~/styles/utils/styled"

const Overlay = styled('div')(css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
  top: 0;
  left: 0;
  z-index: 1;
`)

export default Overlay