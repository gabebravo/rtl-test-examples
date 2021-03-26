import { render, screen, fireEvent, prettyDOM } from '@testing-library/react';
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

test('check if checkbox toggles button disabled/enabled', () => {});
