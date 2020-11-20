import styled, { css } from 'styled-components'

const StoryContainer = styled.div`
  padding: 15px;
  height: 100vh;
  width: 100%;

  ${props =>
    props.background &&
    css`
      background: ${props.background};
    `}
`

export default StoryContainer
