import { useState } from 'react';

export default function SimpleButton() {
  const [btnColor, setBtnColor] = useState('blue');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const changeBtnColor = () =>
    setBtnColor((prevState) => (prevState === 'blue' ? 'red' : 'blue'));

  const disbaleColorBtn = (ev) => setBtnDisabled(ev.target.checked);

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <button
          disabled={btnDisabled}
          onClick={changeBtnColor}
          style={{
            backgroundColor: btnDisabled ? 'gray' : btnColor,
            color: '#FFF',
            padding: 10,
            borderRadius: 5,
          }}
        >
          {`Change to ${btnColor === 'blue' ? 'Red' : 'Blue'}`}
        </button>
      </div>
      <div>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={btnDisabled}
          aria-checked={btnDisabled}
          onChange={disbaleColorBtn}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}
