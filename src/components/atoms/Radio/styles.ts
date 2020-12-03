import styled, { css } from 'styled-components'

export const Container = styled.span<{ isChecked: boolean }>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  &::after,
  &::before {
    content: '';
    display: inline-block;
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }

  &::after {
    background: #e6e6e6;
    z-index: 1;

    ${props =>
      props.isChecked &&
      css`
        background: ${props => props.theme.colors.primary};
      `}
  }

  &::before {
    height: 12px;
    min-width: 12px;
    background: white;
    z-index: 2;
    transform: scale(0);
    opacity: 0;
    transition: 0.2s ease-in-out;

    ${props =>
      props.isChecked &&
      css`
        opacity: 1;
        transform: scale(1);
      `}
  }
`

export const Input = styled.input`
  height: 26px;
  width: 26px;
  opacity: 0;
  position: relative;
  z-index: 3;
  cursor: pointer;
`
