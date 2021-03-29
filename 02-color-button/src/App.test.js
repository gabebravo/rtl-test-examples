import { render, screen, fireEvent, prettyDOM } from '@testing-library/react';
import { replaceCamelWithSpaces } from './App'; // import function tested at bottom
import App from './App';

test('button has correct initial text', () => {
  render(<App />);
  const buttonElm = screen.getByRole('button', { name: /change to red/i });
  // YOU CAN LOG ANY ELM LIKE THIS
  // console.log(prettyDOM(buttonElm));
  expect(buttonElm).toHaveTextContent(/change to red/i); // exact button text matches
});

test('button has correct initial color', () => {
  render(<App />); // MUST RENDER EACH TIME
  const buttonElm = screen.getByRole('button', { name: /change to red/i }); // FIND BUTTON : can have multiple buttons (finds button text)
  expect(buttonElm).toHaveStyle({ backgroundColor: 'blue' }); // ASSERTION : check the elemnt style
});

test('button turns blue when clicked', () => {
  render(<App />);
  const buttonElm = screen.getByRole('button', { name: /change to red/i });
  fireEvent.click(buttonElm); // IMPORTANT : fires the click event on button
  expect(buttonElm).toHaveStyle({ backgroundColor: 'red' }); // check the element style CHANGED
  expect(buttonElm.textContent).toBe('Change to Blue'); // check the exact text of the button
});

test('initial conditions', () => {
  render(<App />);
  // button starts enabled
  const colorButton = screen.getByRole('button', { name: /change to red/i });
  expect(colorButton).toBeEnabled(); // checks button is enabled

  // checkbox starts unchecked
  const checkboxElm = screen.getByRole('checkbox');
  expect(checkboxElm).not.toBeChecked(); // checks the checkbox starts unchecked, uses not for assertion
});

test('checkbox toggles button from enabled to disabled', () => {
  render(<App />);
  // button elm
  const colorButton = screen.getByRole('button', { name: /change to red/i });

  // checkbox disables button
  const checkboxElm = screen.getByRole('checkbox', {
    name: /disable button/i,
  });
  fireEvent.click(checkboxElm); // IMPORTANT : fires the click event on checkbox
  expect(colorButton).toBeDisabled(); // checks button is disabled

  // checkbox disables button
  fireEvent.click(checkboxElm);
  expect(colorButton).toBeEnabled(); // checks button is enabled
});

test('checkbox disable turns button gray, enable turns color back', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to red/i });
  const checkboxElm = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  // checked disable checkbox turns button gray
  fireEvent.click(checkboxElm);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // unchecked disable checkbox turns button back to red
  fireEvent.click(checkboxElm);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

test('change button color, then disable, then change back', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to red/i });
  const checkboxElm = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  // check button toggle changes color
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // check disable checkbox turns button gray
  fireEvent.click(checkboxElm);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // check disable checkbox turns button back to red
  fireEvent.click(checkboxElm);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

// describe statement is a way of describing a group of tests
describe('spaces before camel-case capital letters', () => {
  // TESTS GO INSIDE
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
