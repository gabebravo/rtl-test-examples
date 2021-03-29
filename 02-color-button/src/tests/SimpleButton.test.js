import {
  render,
  screen,
  fireEvent,
  cleanup,
  // prettyDOM,
} from '@testing-library/react';
import SimpleButton from '../components/SimpleButton';

const getElements = () => {
  render(<SimpleButton />);
  const colorBtn = screen.getByRole('button', { name: /change to red/i });
  const checkbox = screen.getByRole('checkbox');
  return { colorBtn, checkbox };
};

describe('red/blue button tests', () => {
  afterEach(cleanup);

  test('button has correct initial text', () => {
    // YOU CAN LOG ANY ELM LIKE THIS
    // console.log(prettyDOM(colorBtn));
    const { colorBtn } = getElements();
    expect(colorBtn).toHaveTextContent(/change to red/i);
  });

  test('button has correct initial color', () => {
    const { colorBtn } = getElements();
    expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });
  });

  test('button turns blue when clicked', () => {
    const { colorBtn } = getElements();
    fireEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
    expect(colorBtn.textContent).toBe('Change to Blue');
  });

  test('initial conditions', () => {
    const { colorBtn, checkbox } = getElements();
    expect(colorBtn).toBeEnabled();
    expect(checkbox).not.toBeChecked();
  });
});

describe('check box tests', () => {
  afterEach(cleanup);

  test('checkbox toggles button from enabled to disabled', () => {
    const { colorBtn, checkbox } = getElements();

    fireEvent.click(checkbox);
    expect(colorBtn).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorBtn).toBeEnabled();
  });

  test('change button color, then disable, then change back', () => {
    const { colorBtn, checkbox } = getElements();

    fireEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
  });
});
