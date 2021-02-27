import { useState, useRef } from 'react'
import { CommonProps } from '~/styles/utils/CommonProps'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'
import CircleLoader from '../CircleLoader'
import DotLoader from '../DotLoader'
import Icon from '../Icon'
import IconButton from '../IconButton'
import { Container, Input, Placeholder } from './styles'

interface SearchInputProps extends CommonProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose?: () => void
  hasCloseButton?: boolean
  value?: string
  placeholder?: string
  variant?: 'dark' | 'light'
  isLoading?: boolean
}

function SearchInput({
  isLoading,
  variant = 'dark',
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

    return (
      <Placeholder variant={variant} onClick={handleFocus}>
        {placeholder}
      </Placeholder>
    )
  }
  return (
    <Container {...commonProps} variant={variant}>
      <Icon
        color={
          variant === 'dark' ? 'rgba(255, 255, 255, 0.5)' : theme.colors.text
        }
        name="search"
      />
      {renderPlaceholder()}
      <Input
        variant={variant}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
      />
      {hasCloseButton && <IconButton onClick={onClose} name="close" />}
      {isLoading && (
        <DotLoader color={variant === 'dark' ? '#fff' : theme.colors.primary} />
      )}
    </Container>
  )
}

export default SearchInput
