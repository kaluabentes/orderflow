import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '~/utils/test-utils'

import Register from '.'

describe('Register template', () => {
  test('form works', async () => {
    const submitHandler = jest.fn()
    const result = {
      name: 'Kaluã Bentes',
      district: '1',
      street: 'Servidão Vitórias',
      number: '40',
      complement: 'Casa 02'
    }

    renderWithTheme(
      <Register
        onSubmit={submitHandler}
        districts={[
          {
            id: '1',
            name: 'Campeche'
          },
          {
            id: '2',
            name: 'Flores'
          }
        ]}
      />
    )

    await userEvent.type(screen.getByLabelText('Nome'), result.name)
    await userEvent.selectOptions(
      screen.getByLabelText('Bairro'),
      result.district
    )
    await userEvent.type(screen.getByLabelText('Rua'), result.street)
    await userEvent.type(screen.getByLabelText('Número'), result.number)
    await userEvent.type(
      screen.getByLabelText('Complemento'),
      result.complement
    )
    await userEvent.click(screen.getByText('Avançar'))
    expect(submitHandler).toHaveBeenCalledTimes(1)
  })
})
