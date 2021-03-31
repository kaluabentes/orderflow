import { css } from 'styled-components'

import styled from '~/styles/utils/styled'
import skeleton from '~/styles/animations/skeleton'

const imageWidth = '95px'
const imageHeight = '95px'
const imageRadius = '10px'

export const Container = styled('button')(css`
  display: flex;
  text-align: left;
  background: white;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  border-color: transparent;
  border-width: 3px;
  position: relative;

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.05);
    border: 1px solid ${props => props.theme.colors.primary};
  }
`)

export const Image = styled('img')(css`
  width: ${imageWidth};
  height: ${imageHeight};
  object-fit: cover;
  border-radius: ${imageRadius};
  margin-right: 15px;
`)

export const Content = styled(`div`)(css`
  width: 100%;
`)

export const Title = styled(`h4`)(css`
  margin: 0 0 5px 0;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4em;
  color: ${props => props.theme.colors.text};
`)

export const Description = styled(`p`)(css`
  margin: 0 0 20px 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textMuted};
  opacity: 0.8;
  line-height: 1.4em;
`)

export const Price = styled('p')(css`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`)

export const LoaderImage = styled('div')(css`
  height: ${imageHeight};
  min-width: ${imageWidth};
  border-radius: ${imageRadius};
  margin-right: 20px;

  ${skeleton}
`)

export const LoaderTitle = styled('div')(css`
  height: 15px;
  margin-bottom: 20px;
  width: 100%;

  ${skeleton}
`)

export const LoaderDescription = styled('div')(css`
  height: 15px;
  margin-bottom: 20px;
  width: 50%;

  ${skeleton}
`)

export const LoaderPrice = styled('div')(css`
  height: 15px;
  width: 25%;

  ${skeleton}
`)

export const AddIconContainer = styled('div')(css`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text};
  border-radius: 50%;
  position: absolute;
  right: 15px;
  bottom: 15px;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.15);
`)
