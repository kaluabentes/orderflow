import { css } from 'styled-components'
import React from 'react'

import styled from '~/styles/utils/styled'
import { CommonProps } from '../../../styles/utils/CommonProps'

const Div = styled('div')(css``)

function Box({
  children,
  flexDirection = 'column',
  display = '',
  ...props
}: CommonProps) {
  return (
    <Div {...props} flexDirection={flexDirection} display={display}>
      {children}
    </Div>
  )
}

export default Box
