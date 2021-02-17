import { css } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Container = styled('h1')(css`
  margin: 0;
  line-height: 1.3em;
  font-weight: 600;
  color: ${props => props.color || props.theme.colors.text};

  ${props => css`
    font-size: ${props.theme.typography.size[props.fontSize]};
  `}
`)
