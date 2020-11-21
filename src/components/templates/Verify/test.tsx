import { renderWithTheme } from '../../../utils/test-utils'

import Verify from '.'
import userEvent from '@testing-library/user-event'
import { cleanup, screen } from '@testing-library/react'

describe('Verify Template', () => {
  test('can type or paste and submit code', async () => {
    const handleSubmit = jest.fn()
    const submitLabel = 'Avançar'
    const codeLabel = 'Código'

    renderWithTheme(
      <Verify
        onSubmit={handleSubmit}
        submitLabel={submitLabel}
        codeLabel={codeLabel}
      />
    )

    await userEvent.type(screen.getByLabelText(codeLabel), '1234')
    await userEvent.click(screen.getByText(submitLabel))
    expect(handleSubmit).toHaveBeenCalledWith('1234')
  })
})
