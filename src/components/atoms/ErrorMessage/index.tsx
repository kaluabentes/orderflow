import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

const ErrorMessage = styled('p')(css`
  margin: 0;
  color: ${props => props.theme.colors.primary};
  padding-top: 7px;
  font-size: 0.75rem;
  font-weight: 500;
`)

export default ErrorMessage
