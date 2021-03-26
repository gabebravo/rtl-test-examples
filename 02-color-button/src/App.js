import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('blue');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const changeBtnColor = () =>
    setBtnColor((prevState) => (prevState === 'blue' ? 'red' : 'blue'));

  const disbaleColorBtn = (ev) => setBtnDisabled(ev.target.checked);

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <button
        disabled={btnDisabled}
        onClick={changeBtnColor}
        style={{ backgroundColor: btnColor, color: '#FFF' }}
      >
        {`Change to ${btnColor === 'blue' ? 'Red' : 'Blue'}`}
      </button>
      <input type="checkbox" onChange={disbaleColorBtn} />
    </div>
  );
}

export default App;
