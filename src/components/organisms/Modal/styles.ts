import styled, { css, createGlobalStyle } from 'styled-components'

import IconButton from '~/components/atoms/IconButton'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => props.bodyOverflow};
  }
`

export const Content = styled.div<{ isLoading: boolean | undefined }>`
  background: white;
  height: 100vh;
  width: 100%;
  transform: translateY(100%);
  transition: 0.3s;
  z-index: 10;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  overflow-y: auto;

  
    ${props =>
      props.sheetMode &&
      css`
        @media (max-width: 600px) {
          height: auto;
          bottom: 0;
        }
      `}

  @media (min-width: 600px) {
    max-height: 580px;
    height: auto;
    border-radius: 10px;
    margin-top: 40px;
    max-width: ${props => props.maxWidth || 400}px;
  }

  ${props =>
    props.isLoading &&
    css`
      justify-content: center;
      align-items: center;
    `}
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    overflow: hidden;
  }
`

export const Overlay = styled.button`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  border: 0;
  outline: 0;
`

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  top: 0;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${props =>
    props.sheetMode &&
    css`
      @media (max-width: 600px) {
        align-items: flex-end;
      }
    `}

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;

      & ${Content} {
        transform: translateY(0);
      }
    `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.text};
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & span {
    font-weight: 600;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
`

export const PadObj = styled.div`
  height: 48px;
  width: 48px;
`

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
`

export const CloseButton = styled(IconButton)`
  padding: 0;

  & i {
    font-size: 24px;
    color: ${props => props.theme.colors.textMuted};
  }
`
