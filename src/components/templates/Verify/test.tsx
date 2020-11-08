import { renderWithTheme } from '../../../utils/test-utils'

import Verify from '.'
import userEvent from '@testing-library/user-event'
import { cleanup, screen } from '@testing-library/react'

describe('Verify Template', () => {
  test('can type or paste and submit code', async () => {
    const handleAdvance = jest.fn()
    const advanceLabel = 'Avançar'
    const codeLabel = 'Código'

    renderWithTheme(
      <Verify
        onAdvance={handleAdvance}
        advanceLabel={advanceLabel}
        codeLabel={codeLabel}
      />
    )

    await userEvent.type(screen.getByLabelText(codeLabel), '1234')
    await userEvent.click(screen.getByText(advanceLabel))
    expect(handleAdvance).toHaveBeenCalledWith('1234')
  })
})
