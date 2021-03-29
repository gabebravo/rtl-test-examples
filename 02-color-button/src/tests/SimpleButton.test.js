import { render, screen, fireEvent, prettyDOM } from '@testing-library/react';
import SimpleButton from '../components/SimpleButton';

const getElements = () => {
  render(<SimpleButton />);
  const colorBtn = screen.getByRole('button', { name: /change to red/i });
  const checkbox = screen.getByRole('checkbox');
  return { colorBtn, checkbox };
};

describe('red/blue button tests', () => {
  test('button has correct initial text', () => {
    // YOU CAN LOG ANY ELM LIKE THIS
    // console.log(prettyDOM(colorBtn));
    const { colorBtn, checkbox } = getElements();
    expect(colorBtn).toHaveTextContent(/change to red/i); // exact button text matches
  });

  test('button has correct initial color', () => {
    const { colorBtn, checkbox } = getElements();
    expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' }); // ASSERTION : check the elemnt style
  });

  test('button turns blue when clicked', () => {
    const { colorBtn, checkbox } = getElements();
    fireEvent.click(colorBtn); // IMPORTANT : fires the click event on button
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' }); // check the element style CHANGED
    expect(colorBtn.textContent).toBe('Change to Blue'); // check the exact text of the button
  });

  test('initial conditions', () => {
    const { colorBtn, checkbox } = getElements();
    expect(colorBtn).toBeEnabled(); // checks button is enabled
    expect(checkbox).not.toBeChecked(); // checks the checkbox starts unchecked, uses not for assertion
  });
});

describe('check box tests', () => {
  test('checkbox toggles button from enabled to disabled', () => {
    const { colorBtn, checkbox } = getElements();

    fireEvent.click(checkbox); // IMPORTANT : fires the click event on checkbox
    expect(colorBtn).toBeDisabled(); // checks button is disabled

    // checkbox disables button
    fireEvent.click(checkbox);
    expect(colorBtn).toBeEnabled(); // checks button is enabled
  });

  test('change button color, then disable, then change back', () => {
    const { colorBtn, checkbox } = getElements();

    // check button toggle changes color
    fireEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

    // check disable checkbox turns button gray
    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });

    // check disable checkbox turns button back to red
    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
  });
});
