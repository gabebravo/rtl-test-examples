import { render, screen, fireEvent, prettyDOM } from '@testing-library/react';
import SimpleButton from '../components/SimpleButton';

describe('red/blue button tests', () => {
  test('button has correct initial text', () => {
    render(<SimpleButton />);
    const buttonElm = screen.getByRole('button', { name: /change to red/i });
    // YOU CAN LOG ANY ELM LIKE THIS
    // console.log(prettyDOM(buttonElm));
    expect(buttonElm).toHaveTextContent(/change to red/i); // exact button text matches
  });

  test('button has correct initial color', () => {
    render(<SimpleButton />); // MUST RENDER EACH TIME
    const buttonElm = screen.getByRole('button', { name: /change to red/i }); // FIND BUTTON : can have multiple buttons (finds button text)
    expect(buttonElm).toHaveStyle({ backgroundColor: 'blue' }); // ASSERTION : check the elemnt style
  });

  test('button turns blue when clicked', () => {
    render(<SimpleButton />);
    const buttonElm = screen.getByRole('button', { name: /change to red/i });
    fireEvent.click(buttonElm); // IMPORTANT : fires the click event on button
    expect(buttonElm).toHaveStyle({ backgroundColor: 'red' }); // check the element style CHANGED
    expect(buttonElm.textContent).toBe('Change to Blue'); // check the exact text of the button
  });

  test('initial conditions', () => {
    render(<SimpleButton />);
    // button starts enabled
    const colorButton = screen.getByRole('button', { name: /change to red/i });
    expect(colorButton).toBeEnabled(); // checks button is enabled

    // checkbox starts unchecked
    const checkboxElm = screen.getByRole('checkbox');
    expect(checkboxElm).not.toBeChecked(); // checks the checkbox starts unchecked, uses not for assertion
  });
});

describe('check box tests', () => {
  test('checkbox toggles button from enabled to disabled', () => {
    render(<SimpleButton />);
    // button elm
    const colorButton = screen.getByRole('button', { name: /change to red/i });

    // checkbox disables button
    const checkboxElm = screen.getByRole('checkbox');
    fireEvent.click(checkboxElm); // IMPORTANT : fires the click event on checkbox
    expect(colorButton).toBeDisabled(); // checks button is disabled

    // checkbox disables button
    fireEvent.click(checkboxElm);
    expect(colorButton).toBeEnabled(); // checks button is enabled
  });

  test('change button color, then disable, then change back', () => {
    render(<SimpleButton />);
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
});
