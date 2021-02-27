import { css } from 'styled-components'
import React from 'react'

import styled from '~/styles/utils/styled'
import { CommonProps } from '../../../styles/utils/CommonProps'

const Div = styled('div')(css`
  display: flex;
`)

function Box({ children, flexDirection = 'column', ...props }: CommonProps) {
  return (
    <Div {...props} flexDirection={flexDirection}>
      {children}
    </Div>
  )
}

export default Box
