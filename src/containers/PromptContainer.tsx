import { useState } from 'react'
import Prompt from '~/components/organisms/Prompt'
import Modal from '~/state/Modal'

const INITIAL_STATE = {
  placeholder: '',
  title: '',
  message: '',
  onConfirm: undefined
}

export function usePrompt() {
  const modal = Modal.useContainer()
  console.log('last', modal.getOptions('Prompt'))
  function prompt(options) {
    modal.updateOptions('Prompt', { isOpen: true, ...options })
  }

  function changeValue(value) {
    modal.updateOptions('Prompt', { value })
  }

  function getValue() {
    console.log('getValue', modal.getOptions('Prompt'))
    return 0
  }

  return { prompt, changeValue, getValue }
}

function PromptContainer() {
  const [value, setValue] = useState()
  const modal = Modal.useContainer()
  const options = modal.getOptions('Prompt')

  return (
    <Prompt
      value={value}
      onChange={event => setValue(event.target.value)}
      isOpen={modal.isOpen('Prompt')}
      placeholder={options.placeholders}
      title={options.title}
      message={options.message}
      onClose={() => {
        if (options.onClose) {
          options.onClose()
        }

        modal.close('Prompt', INITIAL_STATE)
      }}
      onConfirm={value => {
        if (options.onConfirm) {
          options.onConfirm(value)
        }

        modal.close('Prompt', INITIAL_STATE)
      }}
    />
  )
}

export default PromptContainer
