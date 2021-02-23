import React, { useRef, useState } from 'react'
import { CommonProps } from '../../CommonProps'
import ErrorMessage from '../ErrorMessage'

import Label from '../Label'

import { Input, Container, Grid } from './styles'

interface CodeInputProps extends CommonProps {
  label: string
  id: string
  error?: string
  onChange: (value) => void
}

function CodeInput({ label, id, onChange, error, ...props }: CodeInputProps) {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [fourth, setFourth] = useState('')
  const secondRef = useRef()
  const thirdRef = useRef()
  const fourthRef = useRef()

  function handleChange(value, setter, nextInput = null) {
    setter(value)

    if (value && nextInput) {
      nextInput.focus()
    }

    onChange(`${first}${second}${third}${value}`)
  }

  function handlePaste(event) {
    event.preventDefault()

    const value = event.clipboardData.getData('text/plain')
    const [firstLetter, secondLetter, thirdLetter, fourthLetter] = value.split(
      ''
    )

    setFirst(firstLetter)
    setSecond(secondLetter)
    setThird(thirdLetter)
    setFourth(fourthLetter)
  }

  return (
    <Container {...props}>
      <Label htmlFor={id} margin="0 0 10px 0">
        {label}
      </Label>
      <Grid>
        <Input
          value={first}
          id={id}
          onChange={event =>
            handleChange(event.target.value, setFirst, secondRef.current)
          }
          onPaste={handlePaste}
          maxLength={1}
        />
        <Input
          inputRef={secondRef}
          value={second}
          onChange={event =>
            handleChange(event.target.value, setSecond, thirdRef.current)
          }
          onPaste={handlePaste}
          maxLength={1}
        />
        <Input
          inputRef={thirdRef}
          value={third}
          onChange={event =>
            handleChange(event.target.value, setThird, fourthRef.current)
          }
          onPaste={handlePaste}
          maxLength={1}
        />
        <Input
          value={fourth}
          inputRef={fourthRef}
          onPaste={handlePaste}
          onChange={event => handleChange(event.target.value, setFourth)}
          maxLength={1}
        />
      </Grid>
      {error && <ErrorMessage margin="10px 0 0 0">{error}</ErrorMessage>}
    </Container>
  )
}

export default CodeInput
