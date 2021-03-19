import React, { useEffect, useRef } from 'react'
import { Portal } from 'react-portal'
import Box from '~/components/atoms/Box'

import CircleLoader from '~/components/atoms/CircleLoader'
import useIsMounted from '~/utils/useIsMounted'

import {
  GlobalStyle,
  Container,
  Header,
  Content,
  Body,
  Overlay,
  Title,
  CloseButton
} from './styles'

interface Props {
  children: React.ReactNode
  title: string
  isOpen: boolean
  sheetMode?: boolean
  isLoading?: boolean
  onClose?: (event?: React.MouseEvent) => void
  maxWidth?: number
}

export default function Modal({
  sheetMode,
  isOpen,
  isLoading,
  children,
  title,
  onClose,
  maxWidth
}: Props): React.ReactElement | null {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasMounted = useIsMounted()

  const handleTabPress = (event: React.MouseEvent) => {
    const node = containerRef.current as HTMLDivElement
    const focusableElements = node.querySelectorAll(
      `
        a[href],
        button,
        textarea,
        input[type="text"],
        input[type="radio"],
        input[type="checkbox"],
        select
      `
    )
    const activeElement = document.activeElement as Element
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement

    if (
      !event.shiftKey &&
      (activeElement === lastElement ||
        (getComputedStyle(node).opacity === '1' &&
          !Array.from(focusableElements).includes(activeElement)))
    ) {
      firstElement.focus()
      event.preventDefault()
      return
    }

    if (event.shiftKey && activeElement === firstElement) {
      lastElement.focus()
      event.preventDefault()
    }
  }

  const keyListenersMap = new Map([
    [27, onClose],
    [9, handleTabPress]
  ])

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      const listener = keyListenersMap.get(event.keyCode)

      if (listener) {
        listener(event)
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <Portal>
      <GlobalStyle bodyOverflow={isOpen ? 'hidden' : 'auto'} />
      <Container
        isOpen={isOpen}
        sheetMode={sheetMode}
        role="dialog"
        aria-modal="true"
        ref={containerRef}
      >
        <Content
          sheetMode={sheetMode}
          maxWidth={maxWidth}
          isLoading={isLoading}
        >
          {isLoading ? (
            <Box display="flex" padding="40px">
              <CircleLoader />
            </Box>
          ) : (
            <Box display="flex" overflow="auto">
              <Header>
                <Title>{title}</Title>
                <CloseButton name="close" onClick={onClose} />
              </Header>
              <Body>{children}</Body>
            </Box>
          )}
        </Content>
        <Overlay onClick={onClose} />
      </Container>
    </Portal>
  )
}
