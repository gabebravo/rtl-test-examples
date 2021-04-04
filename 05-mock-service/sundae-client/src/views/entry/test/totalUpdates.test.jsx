import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from '../Options'

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />)

  // checks for only a partial match (up to the amount)
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false })

  // make sure total starts at $0.00 
  expect(scoopsSubtotal).toHaveTextContent('0.00') // if this is anywhere, this will succeed

  // _______________________ #1 update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })

  // userEvent actions
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1'); // always use a string for the input
  expect(scoopsSubtotal).toHaveTextContent('2.00') // 1 vanilla scoop = 2.00
  // end of the vanilla scoop test ______________________________________________

  // _______________________ #2 update chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' })

  // userEvent actions
  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, '2'); // 2 chocolate scoops = 4.00
  expect(scoopsSubtotal).toHaveTextContent('6.00') // 1 vanilla scoop = 2.00 + 2 chocolate scoops = 4.00
  // end of the chocolate scoop test ______________________________________________
})