import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../../utils/test-utils'

import Login from '.'

afterEach(cleanup)

describe('Login template', () => {
  test('all controls should work', async () => {
    const handleBack = jest.fn()
    const handleAdvance = jest.fn()
    const userInput = '48996288801'

    renderWithTheme(
      <Login
        title="Entrar"
        text="Informe seu celular para que possamos enviar um codigo de verificação"
        onBack={handleBack}
        onAdvance={handleAdvance}
        advanceLabel="Avançar"
        phoneLabel="Celular"
      />
    )

    await userEvent.click(screen.getByText('arrow_back'))
    expect(handleBack).toHaveBeenCalledTimes(1)

    await userEvent.type(screen.getByLabelText('Celular'), userInput)
    await userEvent.click(screen.getByText('Avançar'))
    expect(handleAdvance).toHaveBeenCalledWith(userInput)
  })
})
