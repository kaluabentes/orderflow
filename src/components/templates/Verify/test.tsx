import { renderWithTheme } from '../../../utils/test-utils'

import Verify from '.'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import getString from '~/i18n/getString'

describe('Verify Template', () => {
  test('can type or paste and submit code', async () => {
    const handleSubmit = jest.fn()

    renderWithTheme(<Verify onSubmit={handleSubmit} />)

    await userEvent.type(
      screen.getByLabelText(getString('app.verify.codeLabel')),
      '1234'
    )
    await userEvent.click(screen.getByText(getString('app.verify.submitLabel')))
    expect(handleSubmit).toHaveBeenCalledWith('1234')
  })
})
