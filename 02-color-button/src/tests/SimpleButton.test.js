import { render, screen, fireEvent, prettyDOM } from '@testing-library/react';
import SimpleButton from '../components/SimpleButton';

const getButton = () => {
  render(<SimpleButton />);
  const colorBtn = screen.getByRole('button', { name: /change to red/i });
  return colorBtn;
};

describe('red/blue button tests', () => {
  test('button has correct initial text', () => {
    // YOU CAN LOG ANY ELM LIKE THIS
    // console.log(prettyDOM(colorBtn));
    const colorBtn = getButton();
    expect(colorBtn).toHaveTextContent(/change to red/i); // exact button text matches
  });

  test('button has correct initial color', () => {
    const colorBtn = getButton();
    expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' }); // ASSERTION : check the elemnt style
  });

  test('button turns blue when clicked', () => {
    const colorBtn = getButton();
    fireEvent.click(colorBtn); // IMPORTANT : fires the click event on button
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' }); // check the element style CHANGED
    expect(colorBtn.textContent).toBe('Change to Blue'); // check the exact text of the button
  });

  test('initial conditions', () => {
    const colorBtn = getButton();
    expect(colorBtn).toBeEnabled(); // checks button is enabled

    // checkbox starts unchecked
    const checkboxElm = screen.getByRole('checkbox');
    expect(checkboxElm).not.toBeChecked(); // checks the checkbox starts unchecked, uses not for assertion
  });
});

describe('check box tests', () => {
  test('checkbox toggles button from enabled to disabled', () => {
    const colorBtn = getButton();

    // checkbox disables button
    const checkboxElm = screen.getByRole('checkbox');
    fireEvent.click(checkboxElm); // IMPORTANT : fires the click event on checkbox
    expect(colorBtn).toBeDisabled(); // checks button is disabled

    // checkbox disables button
    fireEvent.click(checkboxElm);
    expect(colorBtn).toBeEnabled(); // checks button is enabled
  });

  test('change button color, then disable, then change back', () => {
    const colorBtn = getButton();
    const checkboxElm = screen.getByRole('checkbox', {
      name: /disable button/i,
    });

    // check button toggle changes color
    fireEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

    // check disable checkbox turns button gray
    fireEvent.click(checkboxElm);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });

    // check disable checkbox turns button back to red
    fireEvent.click(checkboxElm);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
  });
});
