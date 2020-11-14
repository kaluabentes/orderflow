import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '../../../utils/test-utils'

import InnerPage from '.'

describe('InnerPage template', () => {
  test('back button', async () => {
    const handler = jest.fn()

    renderWithTheme(<InnerPage onBack={handler}>Some content</InnerPage>)

    await userEvent.click(screen.getByText('arrow_back'))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
