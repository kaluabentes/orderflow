import { CommonProps } from '~/components/CommonProps'
import Icon from '../Icon'
import { Container, Input } from './styles'

interface SearchInputProps extends CommonProps {
  onChange?: (event: any) => void
  value?: string
  placeholder?: string
}

function SearchInput({
  onChange,
  value,
  placeholder,
  ...commonProps
}: SearchInputProps) {
  return (
    <Container {...commonProps}>
      <Icon name="search" />
      <Input onChange={onChange} value={value} placeholder={placeholder} />
    </Container>
  )
}

export default SearchInput
