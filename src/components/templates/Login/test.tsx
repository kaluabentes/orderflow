import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '../../../utils/test-utils'

import Login from '.'

describe('Login template', () => {
  test('can submit phone', async () => {
    const handleSubmit = jest.fn()
    const userInput = '48996288801'
    const submitLabel = 'Avançar'
    const phoneLabel = 'Celular'

    renderWithTheme(
      <Login
        onSubmit={handleSubmit}
        submitLabel={submitLabel}
        phoneLabel={phoneLabel}
      />
    )

    await userEvent.type(screen.getByLabelText(phoneLabel), userInput)
    await userEvent.click(screen.getByText(submitLabel))
    expect(handleSubmit).toHaveBeenCalledWith(userInput)
  })
})
