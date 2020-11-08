import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../../utils/test-utils'

import Home, { coverSrc } from '.'
import { logoSrc } from '../../atoms/Logo'

afterEach(cleanup)

describe('Home template', () => {
  test('can use buttons', async () => {
    const handleEnter = jest.fn()
    const handleVerify = jest.fn()
    const enterLabel = 'Enter'
    const verifyLabel = 'Verify'

    renderWithTheme(
      <Home
        enterLabel={enterLabel}
        verifyLabel={verifyLabel}
        onEnter={handleEnter}
        onVerify={handleVerify}
      />
    )

    await userEvent.click(screen.getByText(enterLabel))
    await userEvent.click(screen.getByText(verifyLabel))

    expect(handleEnter).toHaveBeenCalledTimes(1)
    expect(handleVerify).toHaveBeenCalledTimes(1)
  })
})
