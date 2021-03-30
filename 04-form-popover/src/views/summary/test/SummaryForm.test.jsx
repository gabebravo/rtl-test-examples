import {
  render,
  screen,
  fireEvent,
  cleanup,
  // prettyDOM,
} from '@testing-library/react';
import SummaryForm from '../SummaryForm'

const getElements = () => {
  render(<SummaryForm />);
  const confirmBtn = screen.getByRole('button', { name: /confirm order/i });
  const checkbox = screen.getByRole('checkbox', { name: /I agree to Terms and Conditions/i });
  return { confirmBtn, checkbox };
};

describe('initial state and checkbox button enable/disable', () => {
  const { confirmBtn, checkbox } = getElements()

  test('Checkbox is unchecked by default', () => {
    expect(checkbox).not.toBeChecked()
  })

  test('Checking checkbox enables button', () => {
    fireEvent.click(checkbox)
    expect(confirmBtn).toBeEnabled
  })

  test('Unchecking checkbox again disables button', () => {
    fireEvent.click(checkbox)
    expect(confirmBtn).toBeDisabled
  })
})