import { useState } from 'react';
import './App.css';

function App() {
  const [btnColor, setBtnColor] = useState('blue');

  const changeBtnColor = () =>
    setBtnColor((prevState) => (prevState === 'blue' ? 'red' : 'blue'));

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <button
        onClick={changeBtnColor}
        style={{ backgroundColor: btnColor, color: '#FFF' }}
      >
        {`Change to ${btnColor === 'blue' ? 'Red' : 'Blue'}`}
      </button>
    </div>
  );
}

export default App;
