import { css } from 'styled-components'
import React from 'react'

import styled from '~/styles/utils/styled'
import { CommonProps } from '../../CommonProps'

const Div = styled('div')(css``)

function Box({ children, ...props }: CommonProps) {
  return <Div {...props}>{children}</Div>
}

export default Box
