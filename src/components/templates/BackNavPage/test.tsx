import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '../../../utils/test-utils'

import BackNavPage from '.'

describe('BackNavPage template', () => {
  test('back button', async () => {
    const handler = jest.fn()

    renderWithTheme(<BackNavPage onBack={handler}>Some content</BackNavPage>)

    await userEvent.click(screen.getByText('arrow_back'))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
