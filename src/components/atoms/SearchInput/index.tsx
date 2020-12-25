import { useState, useRef } from 'react'
import { CommonProps } from '~/components/CommonProps'
import useIsMobile from '~/utils/hooks/useIsMobile'
import Icon from '../Icon'
import IconButton from '../IconButton'
import { Container, Input, Placeholder } from './styles'

interface SearchInputProps extends CommonProps {
  onChange?: (event: any) => void
  onClose: () => void
  hasCloseButton: boolean
  value?: string
  placeholder?: string
}

function SearchInput({
  onChange,
  onClose,
  hasCloseButton,
  value,
  placeholder,
  ...commonProps
}: SearchInputProps) {
  const inputRef = useRef()
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    const input = inputRef.current as HTMLInputElement
    setIsFocused(true)
    input.focus()
  }

  function renderPlaceholder() {
    if (isFocused) {
      return null
    }

    if (value) {
      return null
    }

    return <Placeholder onClick={handleFocus}>{placeholder}</Placeholder>
  }
  return (
    <Container {...commonProps}>
      <Icon color="rgba(255, 255, 255, 0.5)" name="search" />
      {renderPlaceholder()}
      <Input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
      />
      {hasCloseButton && <IconButton onClick={onClose} name="close" />}
    </Container>
  )
}

export default SearchInput
