import { render, screen, fireEvent } from '@testing-library/react';
import ComplexButton, {
  replaceCamelWithSpaces,
} from '../components/ComplexButton'; // import function tested at bottom

// JUST THE FUNCTION
describe('spaces before camel-case capital letters', () => {
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

describe('MediumVioletRed/MidnightBlue button tests', () => {
  render(<ComplexButton />);
  const complexButtonElm = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });

  test('button has correct initial text', () => {
    expect(complexButtonElm).toHaveTextContent(/change to midnight blue/i);
  });

  test('button has correct initial color', () => {
    expect(complexButtonElm).toHaveStyle({
      backgroundColor: 'MediumVioletRed',
    });
  });

  test('button turns Medium Violet Red when clicked', () => {
    fireEvent.click(complexButtonElm);
    expect(complexButtonElm).toHaveStyle({
      backgroundColor: 'MediumVioletRed',
    });
    expect(complexButtonElm.textContent).toBe('Change to Midnight Blue');
  });
});
