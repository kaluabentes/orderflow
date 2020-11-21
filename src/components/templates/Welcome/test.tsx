import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../../utils/test-utils'

import Welcome from '.'

afterEach(cleanup)

describe('Welcome template', () => {
  test('can use buttons', async () => {
    const handleEnter = jest.fn()
    const handleVerify = jest.fn()

    renderWithTheme(<Welcome onEnter={handleEnter} onVerify={handleVerify} />)

    await userEvent.click(screen.getByText('Entrar'))
    await userEvent.click(screen.getByText('Verificar disponibilidade'))

    expect(handleEnter).toHaveBeenCalledTimes(1)
    expect(handleVerify).toHaveBeenCalledTimes(1)
  })
})
