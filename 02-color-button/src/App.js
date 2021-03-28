import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('blue');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const changeBtnColor = () =>
    setBtnColor((prevState) => (prevState === 'blue' ? 'red' : 'blue'));

  const disbaleColorBtn = (ev) => setBtnDisabled(ev.target.checked);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
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

export default App;
